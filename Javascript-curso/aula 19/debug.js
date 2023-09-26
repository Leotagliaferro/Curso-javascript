//use strict para deixar o código mais "correto"
/*
"use strict"

let opa = "teste"

delete Object.prototype
*/

//console.log
/*
let a = 1
let b = 2
let c = 3

if(c >a) {
    a = b
    console.log(a)
}

for(let i = 5; i > 0; i--) {
    b++
    a = a + c + 1
    console.log(a)
}

if(b == a) {
    a++
} else {
    a = a + b + c
    console.log(a)
}

a = a * b


console.log(a)
*/

//método debugger
/*
let a = 1
let b = 2
let c = 3

if(c >a) {
    a = b
    
}

for(let i = 5; i > 0; i--) {
    b++
    a = a + c + 1
    
}

if(b == a) {
    a++
} else {
    a = a + b + c
    
}

a = a * b
    
    console.log('teste')
*/

//tratamento de input por função
/*
function checarNumero(num) {
    let number = Number(num);
        if(Number.isNaN(number)){
            console.log("Por favor, passe só numeros para o programa")
     }  else {
            return number
        }
    }

checarNumero('gkerg')
checarNumero('sadh')
checarNumero(5)
*/

//exceptions
/*
function saudacao(nome) {
    if(typeof nome != 'string') {
        throw new Error("o parametro nome precisa ser uma string")
    }else {
        console.log(`olá ${nome}`)
    }
}

saudacao("leo")
saudacao(5)

console.log("teste")
*/
 //try catch finaly
/*
try {

    let a = 2 + b

} catch (e) {
    console.log(e)
} finally {

    console.log("executou")
}
*/

//Assertions

let arr = [1,2,3,4,5]
let arr2 = []

function iterarArray(arr) {
    if(arr.length == 0) {
        throw new Error("O array precisa ter pelo menos um elemento")
    }else {
        for(let i = 0; i < arr.length; i++){
            console.log(i)
        }
    }
}

iterarArray(arr)
iterarArray(arr2)
