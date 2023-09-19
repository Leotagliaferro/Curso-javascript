//objetos

//array = []
//objetos = {}

//criando um objeto

/*
let cachorro = {
    patas: 4,
    nome: 'bruce dickson ',
    latir: function() {
        console.log("au au")
    }
}

console.log(cachorro.patas)
console.log(cachorro.nome)
cachorro.latir()

*/

//deletando um objeto


let pessoa = {
    nome: "léo",
    idade: 29,
    profissão: "programador"
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);




//herença de um objeto object.assign adiciona propriedades já existentes

/*

let carro = {
    portas: 2, 
    portamalas: '200l',
    motor: '2.2'
}

let adicionais = {
    tetosolar: true, 
    arcondicionado: true,
}

console.log(carro)

Object.assign(carro, adicionais) 

console.log(carro)

*/

//verificar chaves de um objeto

/*
let obj = {
    'chave1': 1,
    'chave2': 2,
    'chave3': 3,
}

console.log(obj)

console.log(Object.keys(obj))

*/

//mutação de objetos
/*
let pessoa = {
    nome: 'léo'
}

let pessoa2 = pessoa

console.log(pessoa == pessoa2)

pessoa2.nome = 'pedro'

console.log(pessoa.nome)

pessoa.nome = 'maria'

console.log(pessoa2.nome)
*/