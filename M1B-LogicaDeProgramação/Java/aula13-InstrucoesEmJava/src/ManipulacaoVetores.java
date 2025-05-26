public class ManipulacaoVetores {
    public static void main (String[] args) {
        int[] numeros = {1, 2, 3, 4, 5}; // indices: [0][1][2][3][4][5]

        int comprimento = numeros.length;
        System.out.println("O comprimento do vetor é " + comprimento);

        System.out.println("\nMostrar cada elemento: implementação por extenso");
        for (int i = 0; i < numeros.length; i++) {
            System.out.println(numeros[i]);
        }

        System.out.println("\nMostrar cada elemento: implementação simplificado");
        for (int numero : numeros) {
            System.out.println(numero);
        }
    }
}
