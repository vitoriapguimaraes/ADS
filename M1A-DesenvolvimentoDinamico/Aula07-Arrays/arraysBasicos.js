// Criando um array inicial
let frutas = ["maçã", "banana", "laranja", "uva"]; // pos: 0 .. 3

console.log("Array inicial: " + frutas);
console.log("Comprimento do array: " + frutas.length);

// Usando o método push() para adicionar elementos ao final do array
let novoComprimento = frutas.push("manga", "abacate");
console.log("\nArray atualizado push: " + frutas);
console.log("Novo comprimento do array: " + novoComprimento);

// Usando o método pop() para remover o último elemento do array
let ultimaFruta = frutas.pop();
console.log("\nArray atualizado pop: " + frutas);
console.log("Última fruta removida: " + ultimaFruta);

// Usando o método shift() para remover o primeiro elemento do array
let primeiraFruta = frutas.shift();
console.log("\nArray atualizado shift: " + frutas);
console.log("Primeira fruta removida: " + primeiraFruta);