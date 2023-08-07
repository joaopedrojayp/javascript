// Aula 15 de JavaScript - Desafio da Lampada

// Selecionando as Variáveis
let btnOn  =  document.getElementById('turnOn')
let btnOff = document.getElementById('turnOff')
var lamp   =   document.getElementById('lamp')

// Função para verificar se a Lampada está quebrada
function lampQuebrada() {
    return lamp.src.indexOf ('lampada-break') > -1
}


// Função de ligar a Lampada!
function ligarLampada() {
    if(!lampQuebrada () ) {
        lamp.src = 'imagens/lampada-on.jpg'
    }
}
btnOn.addEventListener('click', ligarLampada)


// Função de desligar a Lampada!
function desligarLampada() {
    if(!lampQuebrada () ) {
        lamp.src = 'imagens/lampada-off.jpg'
    }
}
btnOff.addEventListener('click', desligarLampada)


// Evento de Passar o mouse em cima da lampada e ligar
lamp.addEventListener('mouseover', ligarLampada)

// Evento de Passar o mouse em cima da lampada e Desligar!
lamp.addEventListener('mouseout', desligarLampada )


// Evento de DoubleClick!
function dbClick() {
    lamp.src = 'imagens/lampada-break.jpg'
}
lamp.addEventListener('dblclick', dbClick)

