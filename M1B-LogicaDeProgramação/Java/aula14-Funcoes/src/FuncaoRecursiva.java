public class FuncaoRecursiva {

    // Método recursivo para calcular o fatorial

    // n! = n.(n-1).(n-2).(...).3.2.1

    int fatorial(int n) {
        // Caso base: fatorial de 0 ou 1 é 1
        if (n == 0 || n == 1) {
            return 1;
        } else {
            // Chamada recursiva: n * fatorial de (n-1)
            System.out.println("Recursivo contador = " + n);
            return n * fatorial(n -1);
        }
    }

    public static void main(String[] args) {
        FuncaoRecursiva exemplo = new FuncaoRecursiva();
        int numero = 5;
        int resultado = exemplo.fatorial(numero);
        System.out.println("Fatorial de " + numero + " é: " + resultado);
    }
}
