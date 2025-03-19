const combutivel = 6.34;
const kmPorLitro = 14;
const distanciaEmKm = 500;
const rs = "R$";
const espaco = " ";

const gastoDistancia = distanciaEmKm / kmPorLitro;
const valorViagem = rs + espaco + gastoDistancia * combutivel;

console.log(valorViagem.tofixed(2));
