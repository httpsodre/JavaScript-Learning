/* desafio de precificação*/





function desconto (valor, desconto){
    return (valor - (valor * (desconto/100)))
}
function juros (valor, juros){
    return (valor + (valor *(juros/100)))
}
const valorProduto = 100;
const formaDePagamento = 1;

if (formaDePagamento === 1){
console.log(desconto(valorProduto, 10))
} else if (formaDePagamento === 2){
    console.log(desconto(valorProduto,15))
}else if (formaDePagamento === 3){
    console.log(valorProduto)
}else {
    console.log(juros(valorProduto, 10))
}

