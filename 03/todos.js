// let nome = function (a) {
//     if (a == "João") {
//        return "pode";
//     } else {
//        return "não pode";
//     }
//    };
   

//    let banco = function (a) {
//     if (a == "Banco do Brasil") {
//        return "pode";
//     } else {
//        return "não pode";
//     }
//    };


//    let estado = function (a) {
//     if (a == "São Paulo") {
//        return "pode";
//     } else {
//        return "não pode";
//     }
//    };


//    let idade = function (a) {
//     if (a => 18) {
//        return "pode";
//     } else {
//        return "não pode";
//     }
//    };


//    let podeFazer = function (nome, banco, estado, idade) {
//      if (nome == "João" && banco == "Banco do Brasil" && estado == "São Paulo" && idade >= 18) {
//        return "pode";
//      } else {
//        return "não pode";
//      }
//    };
//    console.log(podeFazer("João", "Banco do Brasil", "São Paulo", 18)); // "pode"
//    console.log(podeFazer("João", "Banco do Brasil", "São Paulo", 17)); // "não pode"
//    console.log(podeFazer("João", "Banco do Brasil", "Minas Gerais", 18)); // "não pode"
//    console.log(podeFazer("João", "Itaú", "São Paulo", 18)); // "não pode"
//    console.log(podeFazer("Maria", "Banco do Brasil", "São Paulo", 18)); // "não pode"




banco

let idadeFuncao = require("./idade")
let estadoFuncao = require ("./nome")
let nomeFuncao = require ("./nome")

console.log(nomeFuncao("Geovanna"))
console.log(estadoFuncao("sp"))
console.log(idadeFuncao(15))

  idade


let idade = function(a){
    if (a>= 18){
        return "pode"
    } else{
        return "não pode"
    }
}

module.exports = idade


  estado



let estado = function(a){
    if (a =="São Paulo" || a == "Rio de Janeiro") {
   return "pode abrir a conta"
    } else{
    return "não pode abrir a conta"
    }
}
module.exports = estado


 nome



