public class BuscaBinaria {

    /**
     * Realiza uma busca binária em um array de inteiros.
     *
     * @param arr   O array onde será feita a busca (deve estar ordenado).
     * @param valor O valor a ser buscado no array.
     * @return O índice do valor no array, ou -1 se não for encontrado.
     */
    public static int buscaBinaria(int[] arr, int valor) {
        System.out.println("\nComeçando a busca binária...");

        int esquerda = 0;
        int direita = arr.length - 1;

        System.out.println("Esquerda = " + esquerda + "\nDireita = " + direita);

        // Enquanto os limites não se cruzarem
        while (esquerda <= direita) {
            System.out.println("\nFazendo a busca ENQUANTO...");
            System.out.println("Esquerda = " + esquerda + "\nDireita = " + direita);

            // Calcula o índice do meio
            int meio = (esquerda + direita) / 2;
            System.out.println("Meio = " + meio);

            // Verifica se o valor do meio é o valor buscado
            if (arr[meio] == valor) {
                return meio; // Valor encontrado, retorna o índice
            }

            // Se o valor do meio for menor, busca na metade direita
            if (arr[meio] < valor) {
                esquerda = meio + 1;
            } else {
                // Caso contrário, busca na metade esquerda
                direita = meio - 1;
            }
        }

        // Valor não encontrado
        return -1;
    }

    public static void main(String[] args) {
        // Array de inteiros ordenado
        int[] numeros = {10, 20, 30, 40, 50};

        // Valor que queremos buscar
        int valorBuscado = 30;

        // Chamada da busca binária
        int resultado = buscaBinaria(numeros, valorBuscado);

        // Exibe o resultado
        if (resultado != -1) {
            System.out.println("Valor encontrado no índice: " + resultado);
        } else {
            System.out.println("Valor não encontrado no array.");
        }
    }
}
