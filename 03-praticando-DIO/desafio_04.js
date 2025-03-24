/* Calculo de IMC*/
const altura = 1.83
const peso = 115
const imc = peso / Math.pow(altura, 2)

console.log(imc)

if (imc < 18.5){
    console.log("Você está abaixo do peso!")
} else if (imc >=18.5 && imc <=25){
    console.log("Peso normal!")
}else if (imc >=25 && imc <= 30){
    console.log("Acima do peso!")
}else if (imc >=30 && imc <= 40){
    console.log("Obesidade!")
}else {
    console.log("Obesidade Grave!")
}