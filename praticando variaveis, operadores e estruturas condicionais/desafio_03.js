/* Media de Notas */

const nota1 = 8;
const nota2 = 7;
const nota3 = 6;

const media =(nota1 + nota2 + nota3)/3;

if (media > 7) {
    console.log("Aprovado!")
}else if (media <= 7 ) {
    console.log ("Recuperação!")
} else if (media < 5){
    console.log("Reprovado!")
}