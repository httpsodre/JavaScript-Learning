/* Valor pago de um produto */
const valorProduto = 100;
const formaDePagamento = 1;

if (formaDePagamento === 1){
    const descontoDebito = (valorProduto * 0.1)
console.log(valorProduto - descontoDebito)
} else if (formadepagamento === 2){
    const descontoPixDinheiro = (valorProduto * 0.15)
    console.log(valorProduto-descontoPixDinheiro)
}else if (formaDePagamento === 3){
    console.log(valorProduto)
}else {
    const juros = (valorProduto * 0.1)
    console.log(valorProduto + juros)
}

