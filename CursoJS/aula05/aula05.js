// CRIAR OBJETOS
let pessoa = {
    nome: 'Edson',
    idade : 40,
    peso : 83.5,
    altura: 1.75,
    doador: false,
}


let produtos = {
  descricao : [],
  preco : []
}


const carros = {
    marca : ['Ford' , 'Fiat', 'GM'],
    modelo : ['Ka', 'Uno', 'Corsa'],
    ano : [1999, 2005, 2010]

}


// Como acessa uma informaçã usando "."
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura


// Acessar informação usando " [''] "
pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']


//EXEMPLO - IMC = Peso / altura * altura
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)


// Limita o numero de casas decimais ".toFixed()"
console.log("IMC" + imc.toFixed(2))


// Alterar - Atualizar valor de propriedade
pessoa.nome = "Edson Maia"
produtos.descricao = "['Arroz']"
produtos.preco = ['4,99']


/* Usando spreed operator 
( ao invés de substituir, ele copia e adiciona)*/
produtos.descricao = [...produtos.descricao, 'Feijão']
produtos.preco = [...produtos.preco, 9.99, 4.79]

/* Ultilizando spreed operator em objetos constantes*/
carros.marca = [...carros.marca, 'WV']
carros.modelo = [...carros.modelo, 'Fusca']
carros.ano =   [...carros.ano, '1979']
