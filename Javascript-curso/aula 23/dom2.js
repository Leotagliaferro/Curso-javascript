/* alterando dom com insertBefore

let novoElemento = document.createElement('p')
let texto = document.createTextNode("algum texto")
novoElemento.appendChild(texto)
let elementoAlvo = document.querySelector("#titulo-principal")
let elementoPai = document.querySelector("#container-principal")

elementoPai.insertBefore(novoElemento, elementoAlvo)

*/

//appenchield

//~~~~
/*
let novoElemento = document.createElement('p')
let texto = document.createTextNode("algum texto")
novoElemento.appendChild(texto)

let heading = document.querySelector("#titulo-principal")
let paiHeading = heading.parentNode

paiHeading.replaceChild(novoElemento, heading)
*/


//criando nós de texto
/*
let pSemTexto = document.getElementById("sem-texto")

let texto = document.createTextNode("inserir este texto")

pSemTexto.appendChild(texto)
*/
/*
let lista = document.createElement('ul')

let item = document.createElement('li')

let texto = document.createTextNode("texto lista")

item.appendChild(texto)

for(i = 0; i < 5; i++) {
    lista.appendChild(item)
}

let container = document.getElementById('container-principal')

container.appendChild(lista)
*/
//alterando a cor do elemento
/*
let elemento = document.querySelector("#titulo-principal")

elemento.style.color = 'red'
*/
//acessando todos os itens 
let itens = document.querySelectorAll('.itensazuis')

console.log(itens)