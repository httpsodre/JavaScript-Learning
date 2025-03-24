const etanol = 4.22;
const gasolina = 5.63;
const tipoCombustivel = 'gasolina';
const kmPorLitro = 12;
const distanciaEmKm = 500; 


if (tipoCombustivel === "Etanol") {
    const valorEtanol = distanciaEmKm / kmPorLitro * etanol
    console.log(valorEtanol.toFixed(2));
} else {
    const valorGasolina = distanciaEmKm / kmPorLitro * gasolina
    console.log(valorGasolina.toFixed(2));
}