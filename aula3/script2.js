
var parente = 59;
var minhaIdade = 23;

if (parente > minhaIdade) {
    console.log('é Maior');
}else {
    console.log('é menor');
}

var expressao = (5 - 2) && (5 - 's') && (5 - 2);
console.log(expressao);

var nome = 'Bruno';
var idade = 23;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log('Brasil tem mais');
} else {
    console.log('China tem mais');
}

if(('Gato'=== 'gato') && (5 > 2)){
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

if(('Gato' === 'gato') || (5 >2)) {
    console.log('Gato' && 'Cao');
} else {
    console.log('Falso');
}