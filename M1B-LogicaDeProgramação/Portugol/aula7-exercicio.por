programa
{
	funcao inicio()
	{
		// Variáveis
		real notas[3] // vetor para armazenar 3 notas
		real soma = 0
		real media
		inteiro i

		// Entrada de dados usando laço
		para (i = 0; i < 3; i++)
		{
			escreva("Digite a nota ", i + 1, ": ")
			leia(notas[i])
			soma = soma + notas[i]
		}

		// Cálculo da média
		media = soma / 3

		// Exibição do resultado
		escreva("A média do aluno é: ", media)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 407; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */