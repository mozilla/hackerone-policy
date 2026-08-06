const PROGRAM_HANDLE = "mozilla";
const SLACK_WEBHOOK_URL_SECRET = "mozilla_slack_webhook";
const HACKERONE_SLACK_USERNAMES = "hackerone_slack_usernames";
const BUG_BOUNTY_GROUP = "Mozilla Bug Bounty Team";
const BUG_BOUNTY_GROUP_HANDLE = "mozilla-bug-bounty-team";

exports.run = async ({data, config, apiGet, apiPost, getSecret, promptHai}) => {
  const dryRun = false;
  const slackWebhookUrl = await getSecret(SLACK_WEBHOOK_URL_SECRET);
  const hackeroneSlackUsernames = await getSecret(HACKERONE_SLACK_USERNAMES); // the map looks like [["h1_username", "slack_handle"]]

  const hackeroneSlackUsernamesMap = new Map(JSON.parse(hackeroneSlackUsernames));

  // Fetch reports that are pending program review and have missed triage target
  let url = `/reports?filter[state][]=triaged&filter[program][]=${PROGRAM_HANDLE}&page[size]=100`;
  
  while (url) {
    const reports = await apiGet(url);
    
    for (const report of reports.data) {
      // Get assignee information
      const assignee = report.relationships?.assignee?.data;
      
      if (!assignee) continue;    
      
      // we need to handle the case when a report is assigned to a group
      let assigneeUsername = assignee.attributes?.username || assignee.attributes?.name || "";

      if (!assigneeUsername) continue;

      
         
      const resolutionMissAt = report.attributes?.timer_report_resolved_miss_at;
      
      // Check if triage target was missed
      if (!resolutionMissAt) continue;

      const missedAt = new Date(resolutionMissAt);
      const now = new Date();
      
      // If the miss time is in the past (target already missed)
      if (missedAt < now) {

        const missedAtDate = new Date(missedAt).toDateString()

        // prepare slack message
        const reportUrl = `https://hackerone.com/reports/${report.id}`;
        const slackHandle = hackeroneSlackUsernamesMap.get(assigneeUsername) || assigneeUsername;
        
        const slackMessage = {
          text: `⚠️ Resolution Target Missed`,
          blocks: [
            {
              type: "header",
              text: {
                type: "plain_text",
                text: "⚠️ Resolution Target Missed"
              }
            },
            {
              type: "section",
              fields: [
                {
                  type: "mrkdwn",
                  text: `*Report ID:*\n<${reportUrl}|#${report.id}>`
                },
                {
                  type: "mrkdwn",
                  text: `*Assignee:*\n@${slackHandle}`
                },
                {
                  type: "mrkdwn",
                  text: `*Resolution Missed At:*\n${missedAtDate}`
                }
              ]
            },
            {
              type: "actions",
              elements: [
                {
                  type: "button",
                  text: {
                    type: "plain_text",
                    text: "View Report"
                  },
                  url: reportUrl
                }
              ]
            }
          ]
        };

        const slackResponse = await fetch(slackWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(slackMessage)
        });
        
        if (!slackResponse.ok) {
          console.log(`Failed to send Slack notification for report ${report.id}`);
        }

        // prepare internal comment on hackerone report
        if (assigneeUsername === BUG_BOUNTY_GROUP) assigneeUsername = BUG_BOUNTY_GROUP_HANDLE;

        const commentMessage = `⚠️ **Resolution Target Missed**

        @${assigneeUsername} - This report has missed its resolution target. Check the internal reference for updates from the engineering team.
        
        **Target Missed At:** ${missedAtDate}
        `;

        // Post internal comment
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
        
        console.log(`Report ${report.id} was escalated to ${assigneeUsername}`);
      }
    }

    // get next page of reports
    url = reports.links?.next || null;
  }
};
