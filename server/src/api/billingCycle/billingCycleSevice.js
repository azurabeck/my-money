const BillingCycle = require('./billingCycle')  

// Congirurando metodos que vão ser utilizados no arquivo mapeado API REST

BillingCycle.methods(['get', 'post', 'put', 'delete'])

// validação também no metodo put
BillingCycle.updateOptions({ new: true, runValidators: true })

module.exports = BillingCycle