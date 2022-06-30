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
    console.log('clicou');
}) 

