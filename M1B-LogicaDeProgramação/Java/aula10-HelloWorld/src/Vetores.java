public class Vetores {
    public static void main (String [] args) {
        int[] numbers = {1, 2, 3, 4, 5}; // Inicialização com valores
        String[] names = {"Alice", "Bob", "Charlie"}; // Inicialização com valores

        int[] numeros = new int[5]; // Inicialização de um vetor de 5 inteiros
        numeros[0] = 10;
        numeros[1] = 20;
        numeros[2] = 30;
        numeros[3] = 40;
        numeros[4] = 50;

        String[] nomes = new String[3]; //Inicialização de um vetor de 3 strings
        nomes[0] = "João";
        nomes[1] = "Maria";
        nomes[2] = "Pedro";

        // mostrar
        // System.out.println("Vetor de números iniciais valores: "+ numbers);
        // System.out.println("Vetor de números iniciais manualmente: "+ numbers);

        // percorrer
        System.out.println("Vetor de números iniciais: ");
        for (int num : numbers) {
            System.out.println(num);
        }

        System.out.println("Vetor de números inicializados manualmente: ");
        for (int num : numeros) {
            System.out.println(num);
        }

        System.out.println("Valores do vetor de strings: ");
        for (String nome : nomes) {
            System.out.println(nome);
        }

    }
}
