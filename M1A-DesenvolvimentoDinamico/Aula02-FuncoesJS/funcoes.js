// 1. Criando funções simples:

function saudacao() {
    console.log("Olá, mundo!");
}
saudacao();

// 2. Passando parâmetros para funções:

function novaSaudacao(nome) {
    console.log(`Olá, ${nome}!`);
}
novaSaudacao("Vitória");

// 3. Crie uma função chamada soma.

let soma = (a, b) => {
    return a + b;
}

console.log(soma(8, 9));
console.log(soma(10, 23));