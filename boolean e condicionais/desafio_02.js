const etanol = 4.22;
const gasolina = 5.63;
const tipoCombustivel = 'Etanol';
const kmPorLitro = 12;
const distanciaEmKm = 500; 


if (tipoCombustivel === "Etanol") {
    console.log(distanciaEmKm / kmPorLitro * etanol.toFixed(2));
}