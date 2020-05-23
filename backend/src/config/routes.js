const express = require("express");
//exportar a funcao recebendo parametros podemos usar o server do server.js aqui e fazer as rotas
module.exports = function(server) {
  //api routes
  const router = express.Router();

  server.use("/api", router);
  //todo routes
  const todoService = require("../api/todo/todoService");
  todoService.register(router, "/todos");
};
