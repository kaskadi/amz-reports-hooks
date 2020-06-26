module.exports = (msg) => {
  msg.body = parseBody(msg.body)
  return {
    msg,
    reportType: msg.body.Notification.NotificationPayload.ReportProcessingFinishedNotification.ReportType
  }
}

function parseBody (body) {
  const parser = require('xml2json')
  return parser.toJson(body, { object: true })
}