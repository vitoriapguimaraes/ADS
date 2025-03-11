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
      let descricao = `Casa localizada em ${this.endereco},
      de cor ${this.cor}, com ${this.numeroDeQuartos} quartos`;

      descricao += this.temGaragem ? " e possui garagem." :
      " e não possui garagem.";

      return descricao;
    }
  
    // Método para verificar o status da casa
    verificarStatus() {

      verificarStatusDaCasa(this)
        .then((resultado) => {
          console.log(resultado); // resultado positivo
        })
        .catch((erro) => {
          console.error(erro);
        });
    }
  }
  
  // Criação de um objeto (instância da classe Casa)
  const minhaCasa = new Casa("Rua A, 123", "azul", 3, true);
  
  
  // Manipulação do objeto e exibição da descrição
  console.log(minhaCasa.descrever());

  // Verificação do status da casa utilizando a promessa
  minhaCasa.verificarStatus();
  
  // Caso de falha
  const casaInvalida = new Casa("", 0, "verde", 2, false);
  console.log(casaInvalida.descrever());
  casaInvalida.verificarStatus();