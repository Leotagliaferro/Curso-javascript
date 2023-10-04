//expressões regulares
/*
const reg1 = new RegExp('bola')

console.log(reg1.test("tem bola?")) //true
console.log(reg1.test("não tem")) //false

const reg2 = /bola/
let text = 'tem bola na cesta'

console.log(reg2.test("tem bola?")) //true
console.log(reg2.test("não tem")) //false
console.log(reg2.test(text)) //true

console.log(/quadrado/.test("onde tem um quadrado"))//true
*/

//conjuntos 

/*
const reg1 = /[12345]/

console.log(reg1.test("temos o numero 6?"))
console.log(reg1.test("temos o numero 2?"))

const reg2 = /[0-9]/

console.log(reg2.test("temos o numero 9"))
*/

//caracteres especiais 

const pontoRegex = /./; //valida qualquer valor

console.log(pontoRegex.test("asd"))
console.log(pontoRegex.test(" "))

const dRegex = /\d/ //valida caracteres numericos 

console.log(dRegex.test("123"))
console.log(dRegex.test("asd"))
console.log(dRegex.test(" "))

const dRegex2 = /\D/ //valida somente letras 

console.log(dRegex2.test("123"))
console.log(dRegex2.test("asd"))
console.log(dRegex2.test(" "))

const dRegex3 = /\s/ //só caracteres com espaço

console.log(dRegex3.test("123"))
console.log(dRegex3.test("asd"))
console.log(dRegex3.test(" "))

const dRegex4 = /\w/ //só aceita numeros e letras

console.log(dRegex4.test("123"))
console.log(dRegex4.test("asd"))
console.log(dRegex4.test(" "))

