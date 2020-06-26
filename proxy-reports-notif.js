module.exports.handler = async (event) => {
  const processMsg = require('./helpers/process-msg.js')
  const snsPublish = require('./helpers/sns-publish.js')
  return await snsPublish(processMsg(event.Records[0]))
  .then(res => {
    console.log(JSON.stringify(res, null, 2))
    return true
  })
  .catch(err => {
    console.log(JSON.stringify(err, null, 2))
    return false
  })
}
