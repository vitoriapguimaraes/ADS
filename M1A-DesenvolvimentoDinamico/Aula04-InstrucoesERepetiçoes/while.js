// Imagine que você está fazendo exercícios físicos para se manter saudável. Você decide fazer flexões até ficar cansado.

// Aqui, usaremos um loop while para simular esse processo:

let quantidadeFlexoes = 0;
let cansaco = false;

while (!cansaco) {
    quantidadeFlexoes++;
    console.log(`Eu fiz ${quantidadeFlexoes} flexões!`);

    if (quantidadeFlexoes === 10) {
        cansaco = true;
    }
}