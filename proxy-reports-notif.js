module.exports.handler = async (event) => {
  const AWS = require('aws-sdk')
  const sns = new AWS.SNS({ apiVersion: '2010-03-31' })
  const publishParams = {
    Message: JSON.stringify(event.Records[0]),
    TopicArn: 'arn:aws:sns:eu-central-1:374163881813:mws-report-topic'
  }
  return await sns.publish(publishParams).promise().then(res => true).catch(res => false)
}
