// Definição da classe "Casa"

class Casa {

    // Construtor define as propriedades da classe
    constructor (cor, numQuarto, temGaragem) {
        this.cor = cor;
        this.numQuarto = numQuarto;
        this.temGaragem = temGaragem;
    }
    
    // Método para descrever a casa
    descrever() {
        let descricao = `Esta casa é de cor ${this.cor}, tem ${this.numQuarto} quarto(s)...`;
        if (this.temGaragem) {
            descricao += ` e tem uma garagem.`;
        } else {
            descricao += ` e não tem garagem.`;
        }
        return descricao;
    }

}

// Criação de objetos (instâncias da classe Casa)
const minhaCasa = new Casa("verde", 3, true);
const suaCasa = new Casa("roxa", 2, false);

// Manipulação dos objetos e exibição das descrições
console.log(minhaCasa.descrever());
console.log(suaCasa.descrever());