// Definindo outra função regular com dois parâmetros
function soma(a, b) {
    return a + b;
}

// Chamando a função soma e armazenando o resultado em uma variável
let resultado = soma(13, 29);

// Exibindo o resultado da função soma
console.log("O resultado da soma é: " + resultado);
console.log("O resultado da soma é: " + soma(13, 29));

// Definindo uma função regular usando a palavra-chave 'function'
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

// Chamando a função saudacao e passando um argumento
saudacao("Ana Teixeira");

// Definindo uma função regular sem parâmetros e sem retorno
function mensagem() {
    console.log("Esta é uma mensagem de boas vindas!");
}

// Chamando a função mensagem
saudacao("Ana");
mensagem();