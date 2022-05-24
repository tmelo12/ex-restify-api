var restify = require('restify');
var server = restify.createServer();

//Importando configurações das variáveis de ambiente
require("dotenv").config

//Porta onde o servidor vai escutar
const PORT = process.env.PORT || 8080

server.listen(PORT, ()=> {
  console.log('Servidor iniciado na porta ', PORT);
});