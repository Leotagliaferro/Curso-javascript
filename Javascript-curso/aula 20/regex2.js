//regex com caracteres especiais 
/*
const dia = /\d\d/

console.log(dia.test("2019") && "2019".length == 2)
console.log(dia.test("asd"))
console.log(dia.test("05"))

const palavrasTresLetras = /\w\w\w/

console.log(palavrasTresLetras.test("asd"))
console.log(palavrasTresLetras.test("asdd"))
console.log(palavrasTresLetras.test("as"))
*/

//operador not ! ^
/*
const notab = /[^ab]/

console.log(notab.test("a"))
console.log(notab.test("aqui tem A"))

const nottoaz = /[^a-z]/

console.log(nottoaz.test("aqui tem a e z"))

const az = /[a-z]/

console.log(az.test("asd 123"))
*/

//operador plus 
/*
const umOuMaisNumeros = /\d+/ //aceita todo tipo de digito exceto os vazios 

console.log(umOuMaisNumeros.test("1568"))// true
console.log(umOuMaisNumeros.test("")) // false
*/

//operador question ? valida argumentos opcionais
/*
const padrao = /Abacax?i/

console.log(padrao.test("Abacaxi"))
console.log(padrao.test("Abacai"))

const padrao2 = /\d+\w?/;

console.log(padrao2.test("123"))
console.log(padrao2.test("123a"))
*/

//operador preciso {}
/*
const cep = /\d{5}-\d{3}/

console.log(cep.test("79012-090"))

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(67)9950-9894"));
console.log(tel.test("(67)9950")); //true
*/

//método exec retorna um objeto 
/*
const digitos = /\d/

console.log(digitos.exec("tem o numero 100 aqui?"))
console.log(digitos.exec("tem o numero aqui?"))
*/

//método match
/*
const frase = "o numero 100 esta aqui".match(/\d+/)

console.log(frase)
*/

//choice patern 
/*
const reg = /\w+: (leo|joao|maria)/; 

console.log(reg.test("nome: leo"))
console.log(reg.test("nome: alison"))
*/

//validando um dominio
/*
const validaDominio = /www.\ \w+\.com.br|.com/

console.log(validaDominio.test("www.google.com.br"))
console.log(validaDominio.test("www.google"))
*/

//validar e-mail
/*
const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("leonardotagliaferro@outlook.com"))
console.log(validarEmail.test("leonardotagliaferrooutlook.com"))
*/

//validar datas de nascimento

const valirDarnascimento = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

console.log(valirDarnascimento.test("07/02/1998"))//true
console.log(valirDarnascimento.test("07021998"))//false
console.log(valirDarnascimento.test("07/02/19"))//false









