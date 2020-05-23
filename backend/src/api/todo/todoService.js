const Todo = require("./todo");

Todo.methods(["get", "post", "put", "delete"]);
Todo.updateOptions({ new: true, runValidators: true }); //qdo fizer atualizacao no registro retorna o novo registro nao o antigo
//qdo atualizamos queremos tb que faca as validacoes no novo registro

module.exports = Todo;
