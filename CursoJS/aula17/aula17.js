// Passo 1 - Selecionar as Variáveis!
const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let intervalId = null
// Crie uma funçao para mudara Imgem do botão
const trafficLight = (event) => {
    stopAutomatic()
    turnOn[event.target.id]()

}

const nextIndex = () =>{
   if(colorIndex < 2) {
    colorIndex++
   }else{
    colorIndex = 0
   }
}

const changeColor = () => {
const colors = ['red', 'yellow', 'green']
const color = colors[colorIndex]
turnOn[color]()
nextIndex()
}

const stopAutomatic = () => {
    clearInterval (intervalId)
}

const turnOn = {
    'red':      () => img.src = ' imagens/vermelho.jpg',
    'yellow':   () => img.src = ' imagens/amarelo.jpg',
    'green':    () => img.src =  'imagens/verde.jpg',
   'automatic': () => intervalId = setInterval(changeColor, 1000)
}

// Adicione um Evento nos botões!
buttons.addEventListener('click', trafficLight)




