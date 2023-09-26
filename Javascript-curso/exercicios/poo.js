//saldo deposito e saque
/*
class Conta {
    constructor(saldo){
        this.saldo = saldo
    }

    deposito(valor) {
        this.saldo += valor 
    }

    saque(valor){
        this.saldo -= valor
    }

}

let conta = new Conta(1000)

conta.deposito(1000)


console.log(conta.saldo)

conta.saque(500)

console.log(conta.saldo)
*/
//código de ecomerce adicionar e remover itens 
/*
class Loja {
    constructor(itens, qttoal, valorTotal) {
        this.itens = itens;
        this.qttoal = qttoal;
        this.valorTotal = valorTotal;
    }

    addItem(novoItem) {
        let contador = 0;

        for (let i = 0; i < this.itens.length; i++) {
            if (this.itens[i].id === novoItem.id) {
                this.itens[i].qtd += novoItem.qtd;
                contador = 1;
                break;
            }
        }

        if (contador === 0) {
            this.itens.push(novoItem);
        }

        this.qttoal += novoItem.qtd;
        this.valorTotal += novoItem.preco * novoItem.qtd;
    }

    removeItem(id) {
        let itemIndex = -1;
        for (let i = 0; i < this.itens.length; i++) {
            if (this.itens[i].id === id) {
                itemIndex = i;
                break;
            }
        }

        if (itemIndex !== -1) {
            const removedItem = this.itens.splice(itemIndex, 1)[0];
            this.qttoal -= removedItem.qtd;
            this.valorTotal -= removedItem.preco * removedItem.qtd;
        }
    }
}

let Carrinho = new Loja([
    { 
        id: 1, 
        nome: "camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 2,
        nome: "calça",
        qtd: 2,
        preco: 50
    }    
], 3, 120);

console.log(Carrinho);

// Adicionando itens ao carrinho
Carrinho.addItem({ id: 1, nome: "camisa", qtd: 2, preco: 20 });
Carrinho.addItem({ id: 3, nome: "boné", qtd: 1, preco: 15 });

console.log(Carrinho);

// Removendo um item do carrinho pelo ID
Carrinho.removeItem(2);

console.log(Carrinho);

*/

/*
class Endereco {
    constructor(rua, bairro, cidade, estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade 
        this.estado = estado
    }

    set novaRua(novaRua) {
        this.rua = novaRua
    }


    set novoBairro(novoBairro){
        this.bairro = novoBairro
    }

    set novaCidade(novaCidade){
        this.cidade = novaCidade
    }

    set novoEstado(novoEstado){
        this.estado = novoEstado
    }

}

let endereco = new Endereco("Jaburu", "octavio pécora", "campo grande", "mato grosso do sul")


console.log(endereco)

endereco.novaRua = "rua gaivota"

console.log(endereco)

endereco.novaCidade = "jardins"

console.log(endereco)

*/

/*
class Conta {
    constructor(saldoCC, saldoCP, juros){
        this.saldoCC = saldoCC
        this.saldoCP = saldoCP
        this.juros = juros
    }

    deposito(valor) {
        this.saldoCC += valor
    }

    saque(valor) {
        this.saldoCC -= valor 
    }

    transferenciaCP(valor) {
        this.saldoCC -= valor
        this.saldoCP +- valor
    }

    transferenciaCC(valor) {
        this.saldoCP -= valor
        this.saldoCC += valor
    }

}




let conta = new Conta(1000, 5000, 1)

console.log(conta)

conta.saque(500)

console.log(conta)

conta.deposito(5000)

console.log(conta)

conta.transferenciaCP(3000)

console.log(conta)
*/