public class OperadoresAritmeticos {

    public static void main(String [] args) {

        int x = 15;
        int y = 4;

        int soma = x + y;
        System.out.println("Soma: "+ soma);

        int subtracao = x - y;
        System.out.println("Subtração: "+ subtracao);

        int divisao = x / y;
        System.out.println("Divisão: "+ divisao);

        int modulo = x % y;
        System.out.println("Módulo: "+ modulo);

        // Operadores de Incremento e Decremento
        int incremento = 10;
        int decremento = 10;

        incremento++; // Incremento em 1
        System.out.println("Valor após incremento: " + incremento);

        decremento--; // Decremento em 1
        System.out.println("Valor após decremento: " + decremento);

    }

}
