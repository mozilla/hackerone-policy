const SLACK_WEBHOOK_URL_SECRET = "mozilla_slack_webhook";

exports.run = async ({data, config, apiGet, apiPost, apiPut, apiDelete, getSecret, promptHai}) => {
    
    if (!data.reportId) {
        throw new Error("Missing required reportId in data");
    }

    const { reportId } = data

    // Fetch the full report details
    const report = await apiGet(`/reports/${reportId}`);

    const slackWebhookUrl = await getSecret(SLACK_WEBHOOK_URL_SECRET);
    const reportUrl = `https://hackerone.com/reports/${reportId}`
    const message = "Report escalated to Mozilla bug bounty team for review";
    const severity = report.data.relationships.severity?.data?.attributes?.rating || "No rating";
    
    // prepare Slack message
    const slackMessage = {
        text: `${message}`,
        blocks: [
        {
            type: "header",
            text: {
                type: "plain_text",
                text: `⚠️ ${message}`
            }
        },
        {
            type: "section",
            fields: [
            {
                type: "mrkdwn",
                text: `*Report ID:*\n<${reportUrl}|#${reportId}>`
            },
            {
                type: "mrkdwn",
                text: `*Severity:*\n${severity}`
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
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(slackMessage)
    });
    
    if (!slackResponse.ok) {
        throw new Error(`Failed to send Slack notification for report ${reportId}`);
    }

    console.log(`Slack notification was sent successfully for report ${reportId}`);
};
  
