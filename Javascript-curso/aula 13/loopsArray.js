//loops em arrays imprime todos os elementos do array dentro do console
/*

let numeros = [1,5,10,15,20,25]

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

*/

//métodos push e pop push:adiciona pop:remove

/*
let nomes = ['matheus', 'maria', 'josé']

let elementoRemovido = nomes.pop()

console.log(elementoRemovido)
console.log(nomes)

nomes.push('pedro')

console.log(nomes)

*/ 

//shift: remove o primeiro elemento de um array
//unshift:adiciona um ou mais elemntos no inicio de um array

/*
let carros = [ 'bmw', 'audi', 'vw', 'fiat']

let removerPrimeirocarro = carros.shift()

console.log(removerPrimeirocarro)
console.log(carros)

carros.unshift('celta')

console.log(carros)
console.log(carros[0])

*/

/*
//indexOf e lasindexOf 

// Definindo um array chamado 'nums' com vários números inteiros.
let nums = [5, 6, 2, 4, 9, 6, 2];

// Usando o método indexOf para encontrar o índice do primeiro elemento com o valor 2 no array.
console.log(nums.indexOf(2)); // Isso imprimirá 2 no console.

// Usando o método lastIndexOf para encontrar o índice do último elemento com o valor 2 no array.
console.log(nums.lastIndexOf(2)); // Isso imprimirá 6 no console.

*/

//método slice //seleciona um elemento array dentro do anterior
/*
let nums = [0,1,2,3,4,5,6,7,8,9]

console.log(nums.slice(4,5))
console.log(nums.slice(4,8))

console.log(nums.slice(2))

console.log(nums.slice(-2))

console.log(nums.slice(3,-2))

*/ 

//forEach percorre o array dando todos os resultados dentro dele

/*
let nomes = ["léo", "Maria", "josé", "pedro", "joão"]

nomes.forEach(nome =>{
    console.log("o nome é " + nome)
})

*/ 

//método includes encontra um elemento dentro do array retornado true ou false
/*
let carros = ["bmw", "fiat", "reanault"]
    console.log(carros.includes("fiat"))
*/

//método reverse inverte um array
/*
let carros = ["bmw", "fiat", "reanault"]
    console.log(carros.reverse())

*/

//métodos trim remove tudo que não é string
/*
let nome = "      MATHEUS ";

let nomeCorrigido = nome.trim()

console.log(nome)
console.log(nomeCorrigido)
*/

//métodos de string:padstart insere caracteres antes da string
/*
let sku = "34"

console.log(sku.padStart(6, "0"))

*/

//método split divide uma string por um separador e retorna um array

/*

let frase = "testando o método split"

console.log(frase.split(" "))


let palavras = frase.split(" ")

console.log(palavras)
*/

//metodo join transforma array em uma string 

/*
let frase = "testando o método split";

// Usando o método split para dividir a string 'frase' em um array de substrings com base no espaço em branco (" ").
console.log(frase.split(" ")); // Isso imprimirá um array ["testando", "o", "método", "split"] no console.

// Usando o método split sem um argumento, o que divide a string 'frase' em um array de caracteres individuais.
let palavras = frase.split();

// Em seguida, usando o método join para unir as substrings no array 'palavras' com o caractere "@".
let novaFrase = palavras.join("@");

// Imprimindo a 'novaFrase' no console.
console.log(novaFrase);

*/

//método de string: repeat repete a string
/*
let palavras = "repetir "

console.log(palavras.repeat(20))

*/ 

