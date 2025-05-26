public class PassagemDeParametros {

    // Método que tenta modificar um valor primitivo (passagem por valor)
    public static void modificarValor(int numero) {
        numero = numero * 2;
        System.out.println("Dentro do método (valor primitivo): " + numero);
    }

    // Método que modifica um objeto (passagem por referência)
    public static void modificarObjetivo(Pessoa pessoa) {
        pessoa.nome = "Joao";
    }

    // Método que tenta reatribuir uma referência (não afeta a referência original)
    public static void reatribuirObjetivo(Pessoa pessoa) {
        pessoa = new Pessoa();
        pessoa.nome = "Maria";
    }


    public static void main(String[] args) {
        // Passagem por valor (primitivos)
        int numero = 10;
        System.out.println("Antes do método (valor primitivo): " + numero);
        modificarValor(numero);
        System.out.println("Depois do método (valor primitivo): " + numero);

        System.out.println("\n---------------------");

        // Passagem por referência (objetos)
        Pessoa pessoa = new Pessoa();
        pessoa.nome = "Carlos";
        System.out.println("\nAntes do método (objeto): " + pessoa.nome);
        modificarObjetivo(pessoa);
        System.out.println("Depois do método (objeto): " + pessoa.nome);

        // Tentativa de reatribuição de referência
        reatribuirObjetivo(pessoa);
        System.out.println("Após tentar reatribuir (objeto): " + pessoa.nome);

    }
}

// Classe simples para exemplo de objeto
class Pessoa {
    String nome;
}