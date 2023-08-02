// Aula 13 de JS - Calculadora de IMC

/* 1 PASSO --
CRIAMOS UMA FUNÇÃO E SELECIONAMOS AS VARIÁVEIS! */
function calcular() {
let altura = (document.getElementById('altura').value)/100
let peso = document.getElementById('peso').value

let imc = peso/(altura)**2;
var text = ""
if(imc<18.5) {
    text ="Você Está magro!"
}else if(imc<24.9) {
   text ="Você Está Normal!"
}else if(imc<39.9) {
    text= "Você está com obesidade"
}else if(imc>39.9) {
    text ="Você está com obesidade mórbida"
}
document.getElementById("textArea").innerText= text
}