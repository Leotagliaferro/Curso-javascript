//propriedades que servem como funções retorna string
/*
const cachorro = {
    uivar: function() {
        console.log("auuuu")
    },
    rosnar: function () {
        console.log("grrrr")
    }
}

cachorro.uivar()
cachorro.rosnar()
*/

//método get e set
/*
const cachorro = {
    raça:'SRD',
    uivar: function() {
        console.log("auuuu")
    },
    rosnar: function () {
        console.log("grrrr")
    },
    setRaca: function(raca){
        this.raca = raca
    },
    getRaca: function() {
        return "A raça é " + this.raca
    }
}


cachorro.setRaca('pastor alemão')

console.log(cachorro.raca)

console.log(cachorro.getRaca())
*/

//prototype

// Cria um objeto chamado 'pessoa' com uma propriedade 'maos' definida como 2.
const pessoa = {
    maos: 2, 
}

// Imprime o protótipo do objeto 'pessoa' no console.
console.log(Object.getPrototypeOf(pessoa));

// Verifica se o protótipo do objeto 'pessoa' é igual a 'Object.prototype' e imprime o resultado no console.
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

// Verifica se o objeto 'pessoa' tem a propriedade 'maos' e imprime o resultado no console.
console.log(pessoa.hasOwnProperty('maos'));
