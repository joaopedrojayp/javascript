/* Aula 9 - Funções ou metodos no JS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no JS'
let box = document.querySelectorAll('box')


/*Funções sem parâmetros e sem retorno (procedimento) */
function olaMundo() {
    document.write('Olá Mundo sem retorno! <br>')
}


/* Funções sem parâmetros e com retorno (function) */
function olaMundo2() {
    return 'Olá Mundo com retorno! <br>'
}


// "CHAMAR" a função = Executar ela.
olaMundo()
document.write(olaMundo2())




// OPERAÇÕES
let x = 2
let y = 1
let mensagem = 'Jesus cristo é o Salvador.'


/*Funções com parâmetros e sem retorno (procedimento) */
function somar(a, b) {
    document.write((a + b) + "<br>")
}


/*Funções com parâmetros e com retorno (function) */
function somar2(c, d) {
    return c + d 
}

// "CHAMAR" a função = Executar ela.
somar(x, y)
somar(10, 5)

document.write(`<p>${somar2(x, y)}</p>`)
document.write(`<p>${somar2(5, 2)}</p>`)

/* Função Anônima = não tem nome..
   Pode ou não ter parâmetros
   Pode ou não ter retorno */

   titulo.addEventListener('click' , function() {
    console.log('Clicou no título');
   }) 


   // Arrow Function = Função flecha
    const olaMundoArrow = () => document.write("Olá mundo!!!")

    const olaMundo2Arrow = () => '<p>Olá mundo com Arrow Function!'
    
    olaMundoArrow()
  document.write(olaMundo2Arrow())





