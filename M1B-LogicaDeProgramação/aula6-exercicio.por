programa
{
    funcao inicio()
    {
        inteiro i
        real numero
        real produto = 1

        para (i = 1; i <= 10; i++)
        {
            escreva("Digite o ", i, "º número: ")
            leia(numero)
            produto = produto * numero
        }

        escreva("O resultado da multiplicação dos 10 números é: ", produto, "\n")
    }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 135; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */