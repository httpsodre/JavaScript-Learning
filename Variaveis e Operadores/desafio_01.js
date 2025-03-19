const combutivel = 6.34;
const gastoDeCombustivel = 14.2;
const distancia = 500;
let rs = "R$"
const espaco = " "

let gastoDistancia = distancia - gastoDeCombustivel
let valorViagem = rs + espaco + gastoDistancia * combutivel

console.log(valorViagem)
