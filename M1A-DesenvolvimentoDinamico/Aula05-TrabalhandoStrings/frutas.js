// Exemplo de uso do método slice()
// Temos uma string com várias frutas
let frutas = "maçã, banana, laranja, uva, abacaxi";
console.log("Frutas:", frutas);
console.log("Tamanho da string frutas: ", frutas.length);

// Queremos obter uma parte da string, por exemplo, apenas "banana, laranja"
let parteFrutas = frutas.slice(5, 21);
console.log("Resultado do slice(): ", parteFrutas);

// Exemplo de uso do método trim()
// Temos uma string com espaços em branco no início e no final
let frutaComEspaco = "            acabate           ";

// Queremos remover os espaços em branco do início e do final da string
let frutaSemEspaco = frutaComEspaco.trim();
console.log("Resultado do trim():", frutaSemEspaco);

// Exemplo de uso do método split()
// Temos uma string com várias frutas separadas por vírgulas
let listaDeFrutas = "maçã,banana,laranja,uva,abacaxi";

// Queremos dividir a string em um array de substrings, usando a vírgula como separador
let arrayDeFrutas = listaDeFrutas.split(",");
console.log("Resultado do split()", arrayDeFrutas);

// Testando cada fruta separadamente
// usando um método avançado: for each

arrayDeFrutas.forEach((fruta, index) => {
    console.log(`Fruta ${index + 1}: ${fruta.trim()}`); // Usa trim() para garantir que não há espaços em cada elemento
});