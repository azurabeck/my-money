const port = 3003

// configura conexão com o servidor SERVIDOR COM EXPRESS

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

// PARA TODA REQUISIÇÃO QUE CHEGAR USE BODYPARSE
server.use(bodyParser.urlencoded({extender: true}))
server.use(bodyParser.json())

server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server