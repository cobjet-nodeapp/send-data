var send = require("./index")

module.exports = sendJson

function sendJson(req, res, value, replacer, space) {
    if (!value || (!value.statusCode && !value.headers)) {
        value = { body: value }
    }

    value.headers = value.headers || {}
    value.body = JSON.stringify(value.body, replacer, space)
    value.headers["Content-Type"] = "application/json"

    send(req, res, value)
}
