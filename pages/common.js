function sayhello(name){
  console.log("hello ${name}")
}

function saynihao(name){
  console.log("你好，${name}")
}
module.exports.sayhello = sayhello;
exports.saynihao = saynihao;