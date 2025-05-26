public class BuscaSequencial {

    /**
     * Realiza uma busca sequencial em um array de inteiros.
     *
     * @param arr   O array onde será realizada a busca.
     * @param valor O valor que estamos procurando no array.
     * @return O índice do valor no array, ou -1 se o valor não for encontrado.
     */
    public static int buscaSequencial(int[] arr, int valor) {
        // Percorre todos os elementos do array
        for (int i = 0; i < arr.length; i++) {
            // Verifica se o elemento atual é igual ao valor buscado
            if (arr[i] == valor) {
                return i; // Retorna o índice onde o valor foi encontrado
            }
        }
        // Se não encontrar o valor, retorna -1
        return -1;
    }

    public static void main(String[] args) {
        // Define o array de números
        int[] numeros = {10, 20, 30, 40, 50};

        // Define o valor que queremos buscar
        int valorBuscado = 30;

        // Chama o método de busca sequencial
        int resultado = buscaSequencial(numeros, valorBuscado);

        // Mostra o resultado da busca
        if (resultado != -1) {
            System.out.println("Valor encontrado no índice: " + resultado);
        } else {
            System.out.println("Valor não encontrado no array.");
        }
    }
}
