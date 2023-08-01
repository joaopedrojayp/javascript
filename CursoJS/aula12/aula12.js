// Aula 12 de JS - Estruturas de Repetição

let carros = ['Fusca', 'Brasília', 'Gurgel']

/* FOR = Para Faça */
// i= iterador, interação ou index
for (let i = 1; i <= 5; i++) {
document.write(i + " " )
}

for (let i = 5; i >= 1; i--) {
    document.write(i + "  ")
}

for ( let i = 0; i < carros.length; i++) {
    document.write(`<li>${carros[i]}</li>`)
}


/* FOREACH / forEach = Para CADA */
let frutas = ['Pera', 'Uva', 'Maçã', 'Banana', 'Melancia']

frutas.forEach(function(fruta, i) {
    document.write(`${i} ${fruta} <br>`)
})

carros.forEach(function(carro) {
    document.write(`${carro} <br>`)
})

/* WHILE = Enquanto */

//Criar variavel de contador fora do laço
let contador = 0

while(contador < frutas.length) {
    console.log(frutas[contador])
    contador++ // contador + 1
}

// Aqui o contador esta com o valor 5
console.log(contador)


/* DO WHILE Faça enquanto */

//Criar variavel de contador fora do laço
let iterador = 0

do {
  console.log(carros[iterador])
  iterador++ // contador + 1
}while(iterador < carros.length)





