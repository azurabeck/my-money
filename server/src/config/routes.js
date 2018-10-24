const express = require('express')

module.exports = function(server) {

    // DEFINIR URL BASE PARA TODAS AS ROTAS
    const router = express.Router()
    server.use('/api', router)

    // ROTAS DE CICLE DE PAGAMENTOS
    const BillingCycle = require('../api/billingCycle/billingCycleSevice')
    BillingCycle.register(router, '/billingCycles')
}