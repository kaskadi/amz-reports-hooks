module.exports.handler = async (event) => {
  // simply proxy event to SNS topic because SQS cannot post directly to SNS
  return event.Records[0]
}
