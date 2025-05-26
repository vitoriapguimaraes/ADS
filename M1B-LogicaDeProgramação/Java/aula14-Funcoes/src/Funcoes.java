public class Funcoes {
    // Função: retorna um valor do tipo int
    public static int soma(int a, int b) {
        return a + b;
    }

    public static int subtacao() {
        int a = 100;
        int b = 60;

        return a - b;
    }

    // Procedimento (void): não retorna valor
    public static void imprimirMensagem(String mensagem) {
        System.out.println(mensagem);
    }

    public static void imprimirNaTela() {
        System.out.println("Essa função não tem um parâmetro");
    }

    public static void main(String[] args) {
        // Usando a função soma
        int resultado = soma(5, 7);
        System.out.println("O resultado da soma é: " + resultado);
        System.out.println("O resultado da soma é: " + soma(60, 40));

        // Usando a função subtração
        System.out.println("O resultado da subtração é: " + subtacao());

        // Usando o procedimento imprimirMensagem
        imprimirMensagem("Olá, esta é uma mensagem exemplo!");

        // Usando o procedimento sem parâmetro
        imprimirNaTela();
    }
}
