const verificar_multiplo = (nota1, nota2) =>{
    resultado = (nota1 % nota2 == 0) ? "É multiplo" : "Não é multiplo"
    return resultado
}

alert('Programa para verificar se a primeira nota é multipla da outra')

nota1 = Number(prompt("Digite um número: "))
nota2 = Number(prompt("Digite um número: "))
alert(verificar_multiplo(nota1, nota2))