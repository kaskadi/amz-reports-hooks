module.exports = ({ msg, reportType }) => {
  console.log(JSON.stringify(msg, null, 2))
  console.log(JSON.stringify(reportType, null, 2))
  const AWS = require('aws-sdk')
  const sns = new AWS.SNS({ apiVersion: '2010-03-31' })
  const publishParams = {
    Message: JSON.stringify(msg),
    MessageAttributes: {
      'reportType': {
        DataType: 'String',
        StringValue: reportType
      }
    },
    TopicArn: 'arn:aws:sns:eu-central-1:374163881813:mws-report-topic'
  }
  return sns.publish(publishParams).promise()
}