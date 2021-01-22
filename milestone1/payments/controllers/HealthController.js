class HealthController {

    async health(req, res) {
        res.send({"ok": true})
    }
}

module.exports = (repositories) => {

    var controller = new HealthController()
    var express = require('express')
    var router = express.Router()

    router.get('/health', function (req, res) {
        controller.health(req, res)
    })

    return router
}