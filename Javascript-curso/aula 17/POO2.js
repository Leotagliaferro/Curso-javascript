//prototype

/*
const pessoa = {
    maos: 2, 
}

console.log(Object.getPrototypeOf(pessoa));

console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));

const pessoaNova = Object.create(pessoa)

console.log(pessoaNova.maos)
console.log(pessoaNova.hasOwnProperty('maos'))

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);

*/ 

//classes
/*
let cachorro = {
    patas: 4,
    raca: 'srd',
    latir: function(){
        console.log("auau")
    }
}

console.log(cachorro.patas)

let labrador = Object.create(cachorro)

labrador.latir()

labrador.raca = "labrador"
console.log(labrador.raca)
console.log(cachorro.raca)


let pastor = Object.create(cachorro)

pastor.raca = "pastor alemão"

console.log(pastor.raca)
*/

/* classes por função
function criaCachorro(raca, patas, cor) {
    let cachorro = Object.create({})
    cachorro.raca = raca
    cachorro.patas = patas
    cachorro.cor = cor
    cachorro.latir = function(){
        console.log("auau")
    }
    return cachorro
}

let doberman = criaCachorro('Doberman', 4, 'preta')

console.log(doberman)

doberman.latir()
*/

//classes por new 

/*

function Cachorro(raca, patas, cor) {
    this.raca = raca
    this.patas = patas
    this.cor = cor
    this.uivar = function() {
        console.log("auau")
    }
}

let husky = new Cachorro('Husky', 4, 'cinza')

husky.uivar()

*/

//método prototype new

/*

function Cachorro(raca, patas, cor) {
    this.raca = raca
    this.patas = patas
    this.cor = cor
}

Cachorro.prototype.uivar = function(){
    console.log("auau")
}

let husky = new Cachorro('Husky', 4, 'cinza')

husky.uivar()

*/ 

//classe constructor jeito mais moderno de criar classes
/*
class Cachorro { 
    constructor(raca, patas, cor) {
        this.raca = raca
        this.patas = patas
        this.cor = cor
    }
}

let labrador = new Cachorro('Labrador', 4, 'Amarelo')

console.log(labrador)
*/

//propriedade em uma class


class Cachorro { 
    constructor(raca,cor) {
        this.raca = raca
        this.cor = cor
    }

    latir(){
        console.log("auau")
    }
}

Cachorro.prototype.patas = 4

let labrador = new Cachorro('Labrador', 4, 'Amarelo')

console.log(labrador)

console.log(labrador.patas)

labrador.latir()