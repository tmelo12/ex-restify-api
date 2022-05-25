var restify = require('restify');
var server = restify.createServer();

//Importando configurações das variáveis de ambiente
require("dotenv").config

//Porta onde o servidor vai escutar
const PORT = process.env.PORT || 8080

server.use(restify.plugins.bodyParser({
  mapParams:true,
  mapFiles:false,
  overrideParams: false
}));

server.listen(PORT, ()=> {
  console.log('Servidor iniciado na porta ', PORT);
});

module.exports = server;