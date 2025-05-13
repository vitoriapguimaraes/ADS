public class Operadores {

    public static void main(String [] args) {

        // Operadores de Atribuição
        int a = 10; // Operador de Atribuição Simples (=)
        int b = 20;

        System.out.println("Valor inicial de a = "+ a);
        System.out.println("Valor inicial de b = "+ b);

        a += 5; //Operador de Atribuição Comporta (a = a + 5)
        b -= 2;

        System.out.println("Valor de a após operação de atribuição = "+ a);
        System.out.println("Valor de b após operação de atribuição = "+ b);

        a *= 3;
        b /= 2;

        System.out.println("Valor de a após a segunda operação de atribuição = "+ a);
        System.out.println("Valor de b após a segunda operação de atribuição = "+ b);

    }
}
