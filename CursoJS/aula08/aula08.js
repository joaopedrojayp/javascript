// Aula 08 d JS - DOM + Alterar o CSS
let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 08- Manipular o CSS'

/* Adicionando imagens, e modificando no conteudo diretamente com o
JavaScript usando == .setAttribute == */
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', './imagens/Vlone.png')
imagem.setAttribute( 'width', '250px')

/* Manipulação de CSS */
// document.querySelector('h1').style.color = "orangered"
titulo.style.color = "orangered"
titulo.style.backgroundColor = "wheat"
titulo.style.borderBottom = "2px solid black"
titulo.style.padding = "0.625rem"
titulo.style.borderRadius = "5px"

/* Adicionando e removendo classes com o
  == .setAttribute() & .removeAttribute() == */
let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'laranja')
 box[0].removeAttribute('class')


// MODOS DE COR!
let tela = document.querySelector('main')

let btnDark = document.querySelector("#btdark")

let bntLight = document.querySelector('#btlight')

btnDark.addEventListener('click' , modoDark)
bntLight.addEventListener('click', modoLight)

function modoDark() {
    //event.preventDefault()
    console.log('modo dark')
    tela.classList.add("dark")
    tela.classList.remove("light")
}

function modoLight() {
     //event.preventDefault()
     console.log('modo light')
     tela.classList.add("light")
     tela.classList.remove("dark")
}