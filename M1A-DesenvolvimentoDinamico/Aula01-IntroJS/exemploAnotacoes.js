// Exemplo de comentários / anotações em JavaScript

// Este é um comentário de uma linha
let exemploUmaLinha = "Comentário de uma linha"; // pode ser usado no final de uma linha código

/*
    Comentário de várias linhas:
    é utilizado principalmente para documentação do código
    ou explicações simples que não são intuitivas no código
*/

// Comentário de várias linhas:
// é utilizado principalmente para documentação do código
// ou explicações simples que não são intuitivas no código

/*
A função abaixo soma dois números.
Ela recebe dois parâmetros:
- a: o primeiro número
- b: o segundo número
Retorna a soma de a e b.
*/
function somar(a, b) {
    return a + b; // Retorna a soma dos dois números
}

// Chamada da função somar com exemplos

/**
 * Subtrai o segundo número do primeiro.
 *
 * @param {number} a - O número do qual subtrair.
 * @param {number} b - O número a ser subtraído.
 * @return {number} O resultado da subtração.
 *
 * @example
 * // Exemplo de uso:
 * let resultado = subtrair(10, 4);
 * console.log(resultado); // 6
 */
function subtrair(a, b) {
    return a - b;
}

// Chamadas de função para exemplificação
let resultadoSoma = somar(40, 2);
console.log(resultadoSoma); // Exibe 42

let resultadoSubtracao = subtrair(10, 4);
console.log(resultadoSubtracao); // Exibe 6