/* Resumo do que vimos até agora!
Criaçao de variáveis--*/
let produto = 'Arroz'
let quant = 2
let precoUnitario = 4.99
let precoTotal = quant * precoUnitario
document.write(`Preço Total R$ ${precoTotal} <br>`)


// [EXTRA] Como mudar o tipo de moeda!
document.write(`Preço Total ${precoTotal.
    toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
<hr>`)

// Criação de constantes
const nome = 'João'
const peso = 83.5
const altura = 1.75
const imc = peso / (altura * altura)
document.write(`IMC: ${imc} <br>`)
document.write(`IMC: ${imc.toFixed(2)} <br>`)

// Operadores Aritiméticos!
let nota1 = 7.5
let nota2 = 5.5
let nota3 = 4.0
let notaFinal = nota1 + nota2 + nota3
document.write(`A sua nota final é: ${notaFinal} <br>`)

let compra = 1999.99
let desconto = 145.42
let compraComDesconto = compra - desconto
document.write(`Comprando isso com desconto, o valor será: ${compraComDesconto.toLocaleString(
    'pt-BR', {style: 'currency', currency: 'BRL'}
)} <br>`)
