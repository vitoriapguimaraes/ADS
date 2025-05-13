public class TabelaVerdade {

    public static void main(String[] args){

        // Tabela Verdade para o Operador AND (&&)
        System.out.println("Tabela Verdade para o Operador AND (&&):");
        System.out.println("A    \tB    \tA && B");
        System.out.println(true + "\t" + true + "\t" + (true));
        System.out.println(true + "\t" + false + "\t" + (false));
        System.out.println(false + "\t" + true + "\t" + (false));
        System.out.println(false + "\t" + false + "\t" + (false));

        System.out.println();

        // Tabela Verdade para o Operador OR (||)
        System.out.println("Tabela Verdade para o Operador OR (||):");
        System.out.println("A    \tB    \tA || B");
        System.out.println(true + "\t" + true + "\t" + (true));
        System.out.println(true + "\t" + false + "\t" + (true));
        System.out.println(false + "\t" + true + "\t" + (true));
        System.out.println(false + "\t" + false + "\t" + (false));
    }
}
