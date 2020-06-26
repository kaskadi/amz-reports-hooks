module.exports.handler = async (event) => {
  const AWS = require('aws-sdk')
  const sns = new AWS.SNS({ apiVersion: '2010-03-31' })
  const processMsg = require('./helpers/process-msg.js')
  const { msg, reportType } = processMsg(event.Records[0])
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
  return await sns.publish(publishParams).promise().then(res => true).catch(res => false)
}
