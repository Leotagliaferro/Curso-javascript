//override nas propriedades do prototype
/*
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
Cachorro.prototype.raca = 'SRD'

let labrador = new Cachorro('Labrador', 4, 'Amarelo')

console.log(labrador)

console.log(labrador.patas)

labrador.latir()

console.log(Cachorro.prototype.raca)
console.log(labrador.raca)

*/

/*
class Cachorro { 
    constructor(raca,cor) {
        this.raca = raca
        this.cor = cor
    }

    latir(){
        console.log("auau")
    }
}


Cachorro.prototype.raca = 'SRD'

let patas = Symbol()

Cachorro.prototype[patas] = 4

let labrador = new Cachorro('Labrador', 4, 'Amarelo')

console.log(labrador)

labrador.latir()

console.log(Cachorro.prototype.raca)
console.log(labrador.raca)

console.log(Cachorro.prototype[patas])

*/

//getters e setters
/*
class Cachorro { 
    constructor(raca,cor) {
        this.raca = raca
        this.cor = cor
    }

    latir(){
        console.log("auau")
    }

    get getCor(){
        return this.cor
    }

    set setCor(cor){
        this.cor = cor
    }

}

let pastor = new Cachorro('pastor alemão', 'sem cor')

console.log(pastor)

pastor.setCor = 'Marrom'

console.log(pastor.getCor)
*/

//herança

/*
class Mamifero {
    constructor(patas){
        this.patas = patas
    }
}

let coiote = new Mamifero(4)

console.log(coiote.patas)

class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca
    }

    latir(){
        console.log("auau")
    }
}

let pug = new Cachorro(4,'pug')

console.log(pug.patas)

pug.latir()

*/

//instaceoff