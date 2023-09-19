//arrow
//var; nome da função; nome da variavel; arrow
/*
const parOuImpar = (n) => {
    return n % 2;
}

console.log(parOuImpar(3))

*/

/*

let soma = (a,b) => {
    return a + b;
}
 

console.log((soma(10,20)))

*/ 

/*

const multiplicarpordois = (x) => {
    return x * 2
}

console.log(multiplicarpordois(2))

*/ 


/*
const multiplicarpor2 = x => x * 2;

console.log(multiplicarpor2(4))

*/ 


/*
function soma(a, b) {
    
    if(a === undefined || b === undefined) {
        console.log("esta função precisa ter dois argumentos")
    } else {
        return a + b
    }

}


console.log(soma(1))
console.log(soma(2, 2))

*/ 


/*
function saudacao(nome, idade) {
    if(idade === undefined) {
        console.log("olá" + nome)
    } else {
        console.log("olá" + nome + "você tem " + idade + "anos")
    }
}

saudacao("leonardo")

saudacao("igor", 18)

*/

//valor default

/*

function potencial(base, exp = 2) {
    return Math.pow(base, exp)
}

console.log(potencial(2))

console.log(potencial(2,2))

console.log(potencial(2,3))

*/ 

//closure

/*

function lembrarSoma(x) {
    return function (y) {
        return x + y
    }
}

let soma1 = lembrarSoma(2)

console.log(soma1(5))

*/ 

//recursion

/*

function recursao(n) {
    if (n < 2) {
        console.log("recursão parou" + n);
    } else if (n % 2 !== 0) {
        console.log("número ímpar" + n);
        recursao(n - 1);
    } else {
        console.log("número par" + n);
        recursao(n - 2);
    }
}

recursao(39);
recursao(10);
recursao(55);

*/ 

