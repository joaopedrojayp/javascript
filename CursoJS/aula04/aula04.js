// Arrays
let produtos = ['arroz', 'feijão', 'leite']
var codigos = Array(10, 20, 30)
let meses = ['Jan' , 'Fev', 'Mar', 'Abr']

// ADICIONAR NO FINAL - "push" = empurre
produtos.push('Açucar')
codigos.push(40, 50, 60, 70)
meses.push('Mai', 'Jun', 'Ago', '07' ) 


// REMOVER DO FINAL - "pop" = estourar
produtos.pop()
codigos.pop()
meses.pop()


// ADICIONAR NO INÍCIO - "ushift"
produtos.unshift('Uva', 'Maçã')


//REMOVER DO INICIO "shift"
produtos.shift()


// REMOVER DE UMA POSIÇÃO ESPECIFICA "splice" - emendar
// Necessita dizer " .splice( posiçao inicial, quantos remover)"
codigos.splice(1, 3)

// COPIAR ARRAY "slice" = Fatia ou fatiar
// Necessita dizer " .slice( posiçao inicial, quantos copiar)"
let meses1 = meses.slice()
let meses2 = meses.slice(0, 3)

// VER TAMANHO DO ARRAY "length" - comprimento
meses.length
meses1.length
meses2.length

// Spreed Operator "..." Reticências
// Copia conteudos de Arrays, além de adicionar novos itens após as reticências.
let teste = [...produtos, 'Ovo ', 'Pera']


