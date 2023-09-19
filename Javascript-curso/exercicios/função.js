/*
function imprimirnoconsole () {
    console.log("hello world")
}

imprimirnoconsole()

*/ 

/*
function idade(x){
    console.log("você tem " + x + "anos de idade")
}

idade((20))

*/

/*
function somar(a,b) {
    return a + b;
}

console.log(somar(3,4))
*/ 


/*
function detector(dado) {
    if(typeof dado === 'string') {
        console.log("este dado é uma string")
    } else if(typeof dado === 'number') {
        console.log("é um number")
    } else if(typeof dado === 'boolean') {
        console.log("é uma boolean")
    }
        
}

detector("teste")
detector(23)
detector(false)

*/ 

//função que retorna o numero absoluto
/*
function numeroPos(negativo) {
    return Math.abs(negativo)
}

console.log(numeroPos(-13))

*/ 
/*
function text (string) {
    if(string.length > 10) {
        console.log("texto muito longo")
    } else {
        console.log("texto dentro do limite")
    }
}

text("meunomenaoéjuliasougay")
text("alfabeto")

*/ 
/*
 function numero(y, x = 2) {
    return x ** y
 } 

 console.log(numero(5))

 */ 

 //par impar de forma decrescente 

 function imparPar(num) {
    for(let i = num; i >= 0; i--) {
        if(i % 2 == 0) {
            console.log(i)
        }
    }
 }

 imparPar(15)
 imparPar(13)