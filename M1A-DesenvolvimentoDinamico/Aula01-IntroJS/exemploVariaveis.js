// Exemplo de uso de var, let e const em JavaScript

const externo = "Olá, eu sou uma constante global!";

// Declaração de uma variável usando var
function exemploVar() {
    if (true) {
        var mensagem = "Olá, Faculdade Descomplica! Eu sou uma var...";
    }
    console.log(mensagem);
}

// Chamando a função exemploVar
exemploVar();

// Exemplo de erro e correção
var mensagem1 = "Olá, Faculdade Descomplica! Escopo externo!";
console.log(mensagem1);

// Declaração de uma variável usando let
function exemploLet() {
    if (true) {
        let mensagem = "Olá, Faculdade Descomplica! Eu sou uma let...";
        console.log(mensagem);
    }
    //console.log(mensagem);
}

// Chamando a função exemploLet
exemploLet();

// Exemplo de erro e correção
let mensagem = "Olá, Descomplica! Let externo!";
console.log(mensagem);

// Declaração de uma constante usando const
function exemploConstante() {
    const mensagem = "Olá, Faculdade Descomplica! Eu sou uma constante...";
    console.log(mensagem);
}

// Chamando a função exemploConst
exemploConstante();

// Exemplo externo de const
console.log(externo);

// Exemplo externo tentar alterar constante global
// externo = "Teste";
console.log(externo);

// Demonstrando o escopo global de var
if (true) {
    var escopoGlobal = "Sou uma var global!";
}

console.log(escopoGlobal);

// Demonstrando o escopo de bloco de let
if (true) {
    let escopoBloco = "Sou um bloco!";
    console.log(escopoBloco);
}

// Exemplo do escopo inacessível
// console.log(escopoBloco); // Isso causaria um erro