module.exports = (app, repositories, logger) => {
    const loadPaymentsController = require('./PaymentsController')
    app.use("/api/payment-methods", loadPaymentsController(repositories, logger))

    const healthController = require('./HealthController')
    app.use("/health", healthController())
}

