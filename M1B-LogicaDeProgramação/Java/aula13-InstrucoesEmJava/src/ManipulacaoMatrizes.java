public class ManipulacaoMatrizes {
    public static void main (String[] args) {
        int[][] matriz = { {1, 2, 3}, {4, 5, 6} };

        System.out.println("Mostrar MATRIZ");
        for (int i = 0; i < matriz.length; i++) {

            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print(matriz[i][j] + " ");
            }
            System.out.println();
        }

        System.out.println("\nValor da primeira linha e segunda coluna = " + matriz[0][1]);

        matriz[1][2] = 10;
        System.out.println("\nNovo valor = " + matriz[1][2]);

        System.out.println("Mostrar MATRIZ atualizada");
        for (int i = 0; i < matriz.length; i++) {

            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print(matriz[i][j] + " ");
            }
            System.out.println();
        }
    }
}
