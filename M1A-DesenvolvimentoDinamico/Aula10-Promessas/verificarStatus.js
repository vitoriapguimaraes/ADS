// Função que simula uma operação assíncrona de verificação do status de uma casa
function verificarStatusDaCasa(casa) {
    return new Promise((resolve, reject) => {
        // Simulando uma operação assíncrona que leva 2 segundos para ser concluída
        setTimeout(() => {
            const sucesso = Math.random() > 0.5; // Simulando sucesso ou falha de forma aleatória
            if (sucesso) {
                resolve(`A casa localizada em ${casa.endereco} está em boas condições!`);
            } else {
                reject(`A casa localizada em ${casa.endereco} precisa de reparos.`);
            }
        }, 2000);
    });
}

// Função que simula uma operação assíncrona de inspeção da casa
function inspecionarCasa(casa) {
    return new Promise((resolve) => {
        // Simulando uma operação assíncrona que leva 1 segundo para ser concluída
        setTimeout(() => {
            resolve(`Inspeção da casa localizada em ${casa.endereco} concluída.`);
        }, 1000);
    });
}

// Função que simula uma operação assíncrona de reparos na casa
function repararCasa(casa) {
    return new Promise((resolve) => {
        // Simulando uma operação assíncrona que leva 3 segundos para ser concluída
        setTimeout(() => {
            resolve(`Reparos na casa localizada em ${casa.endereco} foram concluídos.`);
        }, 3000);
    });
}

// Classe "Casa"
class Casa {
    constructor(endereco, cor, numeroDeQuartos, temGaragem) {
        this.endereco = endereco;
        this.cor = cor;
        this.numeroDeQuartos = numeroDeQuartos;
        this.temGaragem = temGaragem;
    }

    // Método para descrever a casa
    descrever() {
        let descricao = `Casa localizada em ${this.endereco}, de cor ${this.cor},
       com ${this.numeroDeQuartos} quartos`;

        descricao += this.temGaragem ? " e possui garagem." : " e não possui garagem.";

        return descricao;
    }

    // Método para verificar o status da casa
    verificarStatus() {
        verificarStatusDaCasa(this)
            .then((resultado) => {
                console.log(resultado); // Saída: A casa está em boas condições!
                return inspecionarCasa(this);
            })
            .then((resultadoInspecao) => {
                console.log(resultadoInspecao); // Saída: Inspeção da casa concluída.
            })
            .catch((erro) => {
                console.error(erro); // Saída: A casa precisa de reparos.
                return repararCasa(this);
            })
            .then((resultadoReparo) => {
                if (resultadoReparo) {
                    console.log(resultadoReparo); // Saída: Reparos na casa foram concluídos.
                    return inspecionarCasa(this);
                }
            })
            .then((resultadoFinalInspecao) => {
                if (resultadoFinalInspecao) {
                    console.log(resultadoFinalInspecao); // Saída: Inspeção da casa concluída após reparos.
                }
            })
            .catch((erro) => {
                console.error(`Erro final: ${erro}`);
            });
    }
}

// Criação de um objeto (instância da classe Casa)
const minhaCasa = new Casa("Rua A, 123", "azul", 3, true);

// Manipulação do objeto e exibição da descrição
console.log(minhaCasa.descrever());

// Verificação do status da casa utilizando a promessa encadeada
minhaCasa.verificarStatus();
