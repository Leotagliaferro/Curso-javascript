//json apenas aceita aspas duplas
/*

let pessoa = {
    "nome": "léo",
    "idade": 28
}

console.log(pessoa.nome)
console.log(pessoa.idade)

*/

//converter json para string


let pessoa = {
    "nome": "léo",
    "idade": 28,
    "profissão": "programador",
    "hobbies": ["video game", "leitura", "correr"]
}

let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)