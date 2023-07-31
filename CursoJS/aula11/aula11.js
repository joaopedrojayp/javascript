// Aula 11 - Estruturas Condicionais e de Escolha

let sit1 = document.querySelector('#sit1')
let sit2 = document.querySelector('#sit2')
let sit3 = document.querySelector('#sit3')
let escolha = document.querySelector('#escolha')

let notaFinal1 = 3
let notaFinal2 = 8
let notaFinal3 = 5

// Condicionais-

/*  == IF == */
if(notaFinal1 >= 7) {
    //sit1.textContent = 'Aprovado'
}


/* == IF ELSE == */
if( notaFinal1 >= 7) {
    sit1.textContent = 'Aprovado(a)'
}else{
    sit1.textContent = 'Reprovado(a)'
}

/* == IF TERNARIO == */
notaFinal2 >= 7 ? sit2.textContent = 'Passou' : sit2.textContent = 'Ficou'

/* == IF ENCADEADO OU ANINHADO == */
if(notaFinal3 >= 7) {
    sit3.textContent = 'Aprovado'
}else if(notaFinal3 <= 3) {
    sit3.textContent = 'Reprovado'
}else{
    sit3.textContent = 'Recuperação'
}


//Decisão 

/* == SWITCH CASE == */
 let situacao = ''
//let situacao =  'Aprovado'
//let situacao =  'Reprovado'
//let situacao =  'Recuperação'

switch(situacao) {
    case 'Aprovado' :
        escolha.textContent = 'Passou de Ano'
        break



    case 'Reprovado' :
        escolha.textContent = 'NÃO passou de ano'
        break



    case 'Recuperação' :
       escolha.textContent = 'Ainda tem uma chance'
       break


    default: 
    escolha.textContent = 'Estude'   
    //Default não precisa de break

}


