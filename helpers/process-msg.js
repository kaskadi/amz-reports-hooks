module.exports = (msg) => {
  msg.body = parseBody(msg.body)
  return msg
}

function parseBody (body) {
  const parser = require('xml2json')
  return parser.toJson(body, { object: true })
}