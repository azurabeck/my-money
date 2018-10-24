// referencia para o server CONFIGURAÇÃO E INSTALÃO
const server = require("./config/server")

//referencia para o db
require('./config/database')

//referencia para as rotas
require('./config/routes')(server)