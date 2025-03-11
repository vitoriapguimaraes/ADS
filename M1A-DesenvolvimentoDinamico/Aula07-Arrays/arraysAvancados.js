// Métodos Avançados de Array

let array1 = [3, 4, 5]; // 0, 1 , 2
let array2 = [6, 7, 8]; // 0, 1 , 2

console.log("Array original:", array1);

// Método unshift(): adiciona um ou mais elementos ao início do array
array1.unshift(1, 2);
console.log("\nApós unshift(1, 2):", array1);

// Método concat(): retorna um novo array resultante da concatenação de dois ou mais arrays
let array3 = array1.concat(array2);
console.log("\nArray concatenado:", array3);

// Método splice(): altera o conteúdo de um array removendo, substituindo ou adicionando elementos
array3.splice(5, 2, 'a', 'b');
console.log("\nApós splice(5, 2, 'a', 'b'):", array3);

// Método slice(): retorna uma cópia superficial de uma parte do array em um novo array
let array4 = array3.slice(3,6);
console.log("\nApós slice(3, 6):", array4);

// Mostrar o array3 original após todas as operações
console.log("\nArray3 original após todas as operações:", array3);