/*
let pessoa = {
    "perna": 2,
    "cabeça": 1,
    "tronco": 1
}

console.log(pessoa.perna)
console.log(pessoa.cabeça)
console.log(pessoa.tronco)
*/

/*
let frase = "testando o método split"

console.log(frase.split(" "))


let palavras = frase.split(" ")

console.log(palavras)

for(let i = 0; i < palavras.length; i++) {
    console.log(palavras[i])
}
*/



let calculadora = {
    somar: function(a,b) {
        return a + b 
    },

    subtrair: function(a,b){
        return a - b
    },

    multiplicar: function(a,b){
        return a * b
    },

    dividir: function(a,b){
        if(b === 0){
            return "divisão por zero não é definida "
        }

        return a / b
    }
        
}

console.log(calculadora.somar(5, 3));        
console.log(calculadora.subtrair(10, 2));    
console.log(calculadora.multiplicar(4, 6));  
console.log(calculadora.dividir(8, 4));      
console.log(calculadora.dividir(6, 0));   