/* Usando uma função dentro de outra */

function escrevaMeuNome (name){
    return 'meu nome é' + name
}

function verificarIdade(idade){
    if (idade >= 18){
        console.log(escrevaMeuNome('Alan') + ' '+ 'é maior de idade')
    }else{
        console.log(escrevaMeuNome('Alan')+' '+'é menor de idade')
    }
}

verificarIdade(26)