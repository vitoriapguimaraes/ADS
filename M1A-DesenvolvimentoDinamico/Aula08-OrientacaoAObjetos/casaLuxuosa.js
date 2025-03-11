// Classe BASE "Casa"

class Casa {
    constructor(cor, numQuarto, temGaragem) {
        // Propriedades privadas utilizando convenção de underscore
        this._cor = cor;
        this._numQuarto = numQuarto;
        this._temGaragem = temGaragem;
    }

    // Métodos getters e setters para acessar e modificar as propriedades
    get cor() {
        return this._cor;
    }

    set cor(novaCor) {
        this._cor = novaCor;
    }

    get numQuarto() {
        return this._numQuarto;
    }

    set numQuarto(novoNumQuarto) {
        this._numQuarto = novoNumQuarto;
    }

    get temGaragem() {
        return this._temGaragem;
    }

    set temGaragem(novoTemGaragem) {
        this._temGaragem = novoTemGaragem;
    }

    // Método para descrever a casa
    descrever() {
        let descricao = `Esta casa é de cor ${this._cor}, tem ${this._numQuarto} quartos`;
        if (this._temGaragem) {
            descricao += " e tem uma garagem.";
        } else {
            descricao += " e não tem garagem.";
        }
        return descricao;
    }
}

// Classe DERIVADA "CasaLuxuosa" que HERDA de "Casa"
class CasaLuxuosa extends Casa {
    constructor(cor, numeroDeQuartos, temGaragem, temPiscina) {
        // Chama o construtor da classe base
        super(cor, numeroDeQuartos, temGaragem);
        // Propriedade adicional específica da classe derivada
        this._temPiscina = temPiscina;
    }

    // Getter e setter para a nova propriedade
    get temPiscina() {
        return this._temPiscina;
    }

    set temPiscina(novoTemPiscina) {
        this._temPiscina = novoTemPiscina;
    }

    // Sobrescrita do método descrever para incluir a piscina
    descrever() {
        let descricao = super.descrever(); // Chama o método descrever da classe base
        if (this._temPiscina) {
            descricao += " Também tem uma piscina.";
        } else {
            descricao += " Não tem piscina.";
        }
        return descricao;
    }
}

// Criação de objetos (instâncias das classes)
const minhaCasa = new Casa("azul", 3, true);
const casaLuxuosa = new CasaLuxuosa("branca", 5, true, true);

// Manipulação dos objetos e exibição das descrições
console.log(minhaCasa.descrever());
console.log(casaLuxuosa.descrever());