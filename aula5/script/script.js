var pessoa = {
    nome: 'Bruno',
    idade: 23,
}

console.log(pessoa);

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado
    },
    cinco() {
        return 5;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.log(quadrado.cinco());

var height = 100

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84e',
    metadeHeight() {
        return height / 2
    },
}
menu.backgroundColor = '#000'

var br = menu.backgroundColor

var dadosPessoais = {
    nome: 'Bruno',
    sobrenome: 'Damiao',
    idade: 23,
    profissão: 'Auxiliar de Expedição',
    faculdade: 'Analise e Desenvolvimento de Sistemas',
    objetivo: 'Virar Desenvolvedor',
    nomeCompleto() {
        return `Meu nome completo é ${this.nome} Tozi ${this.sobrenome}.`
    }
}
var preco = 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'audi',
}
carro.preco = 3000

console.log(carro);

var cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir(late){
        if (late === 'homem') {
            return 'o cachorro latiu'
        } else {
            return 'o cachorro nao latiu'
        }
    }
}