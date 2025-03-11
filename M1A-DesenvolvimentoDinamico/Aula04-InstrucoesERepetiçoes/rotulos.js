// Imagine que você está organizando uma festa de aniversário.
// Os blocos de código são como diferentes áreas da festa, onde diferentes atividades acontecem.
// Por exemplo, você pode ter uma área para dançar, uma área para jogos e uma área para comer.
Método Trim e Split


O método trim remove espaços em branco do início e do fim da string, sendo útil para garantir a limpeza de dados inseridos pelo usuário. O método split separa uma string em um array, utilizando um delimitador específico, como a vírgula.
{
    // Área para dançar
    console.log("Hora de dançar!");
    // Aqui vão as instruções para a pista de dança
}

{
    // Área para jogos
    console.log("Vamos jogar!");
    // Aqui vão as instruções para os jogos
}

{
    // Área para comer
    console.log("Hora de comer!");
    // Aqui vão as instruções para o buffet
}

// Os rótulos são como etiquetas que você coloca em diferentes atividades durante a festa, para identificá-las.

// Imagine que você tem uma competição de dança e uma competição de jogos acontecendo ao mesmo tempo.

danca:
for (let i = 0; i < 3; i++) {
    jogos:
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j ===1) {
            console.log("A competição de dança foi iterrompiada!");
            break danca;
        }
        console.log(`Competidor ${i+1} está dançando enquanto o competidor ${j+1} está jogando.`)
    }
}

/*
    O código simula uma situação em que há uma competição de dança e uma competição de jogos acontecendo simultaneamente.
    Os loops for aninhados representam as duas competições,
    onde cada competidor está envolvido tanto na dança quanto nos jogos.
    Quando uma condição específica é atendida (no caso, i === 1 && j === 1),
    a competição de dança é interrompida e uma mensagem é exibida,
    utilizando o rótulo danca para sair do loop da competição de dança.
    Isso demonstra o uso dos rótulos para controlar o fluxo do código em situações específicas.
 */