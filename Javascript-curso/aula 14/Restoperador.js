//rest operador 
/*
let num = 1
let num1 = 5
let num2 = 3
let num3 = 4

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++)
    console.log(args[i])
}


imprimirNumeros(num,num1,num2)
console.log("pause")
imprimirNumeros(num2,num3)
console.log("pause")

*/

//destructing com objetos

/*

let obj = {
    rodas:4,
    portas: 4, 
    tetosolar: true,
    motor: "2.0"
}


const {rodas: vRodas, portas: vPortas, tetosolar:vTetosolar, motor:vMotor} = obj;

console.log(vRodas)
console.log(vPortas)

*/
//destructiring em array
let numeros = [2,4,5,8]

let [num1, num2, num3, num4] = numeros

console.log(num1)
console.log(num3)