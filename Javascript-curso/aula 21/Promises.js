//callback
/*
console.log("1")

setTimeout(function() {
    console.log("5")
}, 2000)

console.log("2")
console.log("3")
console.log("4")
*/

//promises
/*
let p = Promise.resolve(5);

console.log("outros códigos");

console.log(p);

p.then((value) => {
  console.log(`o valor é ${value}`);
});
*/
/*
let p = Promise.reject(new Error("não deu certo"));

console.log("lalal");

p.then(value => console.log(value))
.catch(reason => console.log("falhou " + reason));
*/
/*
let num = 2;

let p = new Promise((resolve, reject) => {
    if(num == 2) {
        resolve(`o numero é ${num}`);
    } else {
        reject(new Error("falou"));
    }
});
*/
/*
const p1 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve(10)
    },
    5000)
}) 

const p2 = Promise.resolve(10)

const p3 = new Promise((resolve,reject) => {
    resolve(10)
})

Promise.all([p1,p2,p3]).then((value) => console.log(value))
*/
/*
async function somar(a,b) {
    return a + b
}

somar(2,4).then(value => console.log(value))
*/

//generators

/*
function* criadorId(){
    let id = 0
    while(true) {
        yield id++
    }
}

let criaid = criadorId()
console.log(criaid.next().value)
console.log(criaid.next().value)
*/

