// Criação de strings com nomes de animais
let animal1 = "Elefante";
let animal2 = "Girafa";
let animal3 = "Zebra";

// Exemplo do método substring()
// Pega parte da string 'Elefante', começando no índice 3 até o índice 7
let parteAnimal1 = animal1.substring(3, 7);
console.log("Resultado substring()", parteAnimal1);

// Exemplo do método replace()
// Substitui a substring 'ra' por 're' em 'Girafa'
let novoAnimal2 = animal2.replace("ra", "re");
console.log("Resultado replace()", novoAnimal2);

// Exemplo do método concat()
// Concatena as strings 'Elefante', 'Girafa' e 'Zebra' com espaços entre elas
let animaisJuntos = animal1.concat(" ", animal2, " ", animal3);
console.log("Resultado concat()", animaisJuntos);