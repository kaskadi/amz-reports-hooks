module.exports.handler = async (event) => {
  const AWS = require('aws-sdk')
  const sns = new AWS.SNS({ apiVersion: '2010-03-31' })
  const msg = processMsg(event.Records[0])
  const publishParams = {
    Message: JSON.stringify(msg),
    TopicArn: 'arn:aws:sns:eu-central-1:374163881813:mws-report-topic'
  }
  return await sns.publish(publishParams).promise().then(res => true).catch(res => false)
}
