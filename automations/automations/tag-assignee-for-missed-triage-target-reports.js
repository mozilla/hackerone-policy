//NOTE: this automation will be modified to send slack messages once I finish setting up the slack app
const PROGRAM_HANDLE = "mozilla";
const H1_TRIAGE_GROUP = "H1 Triage_Core";

exports.run = async ({data, config, apiGet, apiPost, promptHai}) => {
  const dryRun = true;

  // Fetch reports that are pending program review and have missed triage target
  let url = `/reports?filter[state][]=pending-program-review&filter[program][]=${PROGRAM_HANDLE}&page[size]=100`;
  
  while (url) {
    const res = await apiGet(url);
    
    for (const report of res.data) {
      // Get assignee information
      const assignee = report.relationships?.assignee?.data;
      
      if (!assignee) continue;    
      
      // we need to handle the case when a report is assigned to a group
      // tag @mozilla-bug-bounty-team in this case
      const assigneeUsername = assignee.attributes?.username || assignee.attributes?.name || "";

      if (!assigneeUsername) continue;

      // Skip if assignee is H1 Triage
      if (assigneeUsername === H1_TRIAGE_GROUP) {
        console.log("skip report assigned to H1 triage");
        continue;
      }      
      
      const triageMissAt = report.attributes?.timer_report_triage_miss_at;
      
      // Check if triage target was missed
      if (!triageMissAt) continue;

      const missedAt = new Date(triageMissAt);
      const now = new Date();
      
      // If the miss time is in the past (target already missed)
      if (missedAt < now) {
        // Format the internal comment with assignee mention
        const commentMessage = `⚠️ **Triage Target Missed**

        @${assigneeUsername} - This report has missed its triage target. Check the internal reference for updates from the engineering team.
        
        **Target Missed At:** ${new Date(missedAt).toLocaleString()}
        `;
    
        // Post internal comment with assignee tagged
        if (!dryRun) {
          await apiPost(`/reports/${report.id}/activities`,
              JSON.stringify({
                  "data": {
                  "type": "activity-comment",
                  "attributes": {
                      "message": commentMessage,
                      "internal": true
                  }
                  }
              })
          );
        }
        
        console.log(`Report ${report.id} was escalated to ${assigneeUsername} with message: ${commentMessage}`);
      }
    }
    url = res.links?.next || null;
  }
};
