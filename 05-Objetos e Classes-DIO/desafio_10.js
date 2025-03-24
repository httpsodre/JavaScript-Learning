/* classe para representar carros e gasto durante certo trajeto*/
class Carro {
    constructor(marca, cor, kmPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }
}
class Viagem {
    constructor(carro, distancia, precoLitro) {
        this.carro = carro;
        this.distancia = distancia;
        this.precoLitro = precoLitro;
    }
    obterAutonomia() {
        return this.carro.kmPorLitro * this.distancia;
    }
    calcularCusto() {
        return this.distancia / this.carro.kmPorLitro * this.precoLitro;
    }
}
const carro = new Carro('Chevrolet', 'Prata', 10);
const viagem = new Viagem(carro, 500, 6.5);
console.log(carro)
console.log(viagem.calcularCusto ()+ ' reais'); 



