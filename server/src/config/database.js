// configura conexão com o mongoo CONEXÃO BANCO DE DADOS

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')
