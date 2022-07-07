function areaQuadrado(lado) {
    return lado * lado;
}

console.log('A area do quadrado é', areaQuadrado(5));

function imc(peso, altura){
    const imc = peso / (altura ** 2);
    return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
    if (cor === 'azul') {
        return 'Voce gosta do céu'
    } else if (cor === 'vermelho') {
        return 'Voce gosta de sangue'
    } else {
        return 'Voce não gosta de cor'
    }
}

console.log(corFavorita('azul'));
console.log(corFavorita('vermelho'));
console.log(corFavorita());

addEventListener('click', function() {
    console.log('Bruno tozi Damiao');
}) 

function terceiraIdade(idade) {
    console.log(typeof idade);
    if(typeof idade !== 'number') {
        return 'Por favor somente numeros.'
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
    console.log(idade);    
}

console.log(terceiraIdade('a'))


// Crie uma função para verificar se um valor é Truthy
function verificador(dado) {
    return !!dado
}

console.log(verificador('Sim'));
// Crie uma função matemática que retorne o perímetro de um quadr
// lembrando: perímetro é a soma dos quatro lados do quadrado
function quadrado(lado) {
    return lado * 4
    
}

console.log(quadrado(2, 4, 6, 4));
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    var meuNome = `Meu nome é ${nome} ${sobrenome}`
    return meuNome
    
}

console.log(nomeCompleto('Bruno', 'Tozi'));

// Crie uma função que verifica se um número é par

function par(num) {
    if (num % 2 === 0) {
        return `o numero ${num} é par`
    } else {
        return `o numero ${num} é impar`
    }
    
}

console.log(par(292));
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
    return `o tipo de dado retornado de ${dado} é ${typeof dado}`
}

console.log(tipoDado('1'));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'scroll' ocorrer.

addEventListener('clicl', function() {
    console.log('Bruno tozi Damiao');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {

    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
   }
   function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises}`
   }
   
   console.log(precisoVisitar(20));
   console.log(jaVisitei(20));
   
