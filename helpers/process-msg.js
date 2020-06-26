module.exports = (msg) => {
  const parsedBody = parseBody(msg.body)
  msg.body = parsedBody
  return {
    msg,
    reportType: parsedBody.Notification.NotificationPayload.ReportProcessingFinishedNotification.ReportType
  }
}

function parseBody (body) {
  const parser = require('xml2json')
  return parser.toJson(body, { object: true })
}