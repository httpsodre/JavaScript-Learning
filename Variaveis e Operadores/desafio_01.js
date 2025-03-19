const combutivel = 6.34;
const kmPorLitro = 14;
const distanciaEmKm = 500;


const gastoDistancia = distanciaEmKm / kmPorLitro;
const valorViagem =gastoDistancia * combutivel;

console.log(valorViagem.toFixed(2));
