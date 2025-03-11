// Função que simula a operação de uma calculadora
function calculadora(num1, num2) {

    // Operações aritméticas básicas
    let adicao = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicao = num1 * num2;
    let divisao = num1 / num2;
    let modulo = num1 % num2;
    let exponencial = num1 ** num2;

    // Incremento e Decremento
    // Vamos incrementar num1
    let incrementar = num1;
    incrementar++;

    // Vamos decrementar num2
    let decrementar = num2;
    decrementar--;

    // Exibindo os resultados no console
    console.log(`Adição: (${num1} + ${num2}) = ${adicao}`);
    console.log(`Subtração: (${num1} - ${num2}) = ${subtracao}`);
    console.log(`Multiplicação: (${num1} * ${num2}) = ${multiplicao}`);
    console.log(`Divisão: (${num1} / ${num2}) = ${divisao}`);
    console.log(`Módulo: (${num1} % ${num2}) = ${modulo}`);
    console.log(`Exponencial: (${num1} ** ${num2}) = ${exponencial}`);
    console.log(`Incrementar: (${num1})++ = ${incrementar}`);
    console.log(`Decrementar: (${num2})-- = ${decrementar}`);

}

// Executando a função calculadora

// calculadora ();
// NaN = Not a Number

calculadora (50, 7);