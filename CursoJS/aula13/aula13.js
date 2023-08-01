// SELECIONAR ELEMENTOS
let numeroSortedo = document.querySelector('#dado')
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')

btnSortear.addEventListener('click', function() {
    // Adicionar a animação
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')

    //Ocultar o botão sortear
    btnSortear.style.display = 'none'

})


