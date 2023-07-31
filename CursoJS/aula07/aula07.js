// Aula 07, DOM

/* Para manipular o DOM, precisamos indicar qual objeto usar, depois chamar um método(função) para selecionar ele, seus dados, trazer informações e etc.*/

/* == .querySelector() == 
selecionar elementoscom base na tag
 "#id" ou ".class"*/
 let titulo = document.querySelector('h1')
 console.log(titulo)

 /* == .textContent ==
  propriedade que serve para acessar ou alterar conteudo de um elemento selecionado. */
console.log(titulo.textContent)
console.log(titulo.innerHTML)
titulo.textContent = 'DOM'


/* == .querySelectorAll() == 
Seleciona todos os elementos com base na tag, #id ou .class */
let testando = document.querySelector('.box')
document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)


/* == .getElementsByTagName() == */
let testeTag = document.getElementsByTagName('div')


/* == .getElementById() == */
let testeId = document.getElementById('titulo')


/* == getElementByClassName() == */
let testeClass = document.getElementsByClassName('box')

