const verificar_par = (numero=0) =>{
    resultado = (numero % 2 == 0) ? "par" : "Impar"
    return resultado
}

alert("Programa que verificar se um numero é par ou impar")

numero = Number(prompt("Digite um número: "))
alert(verificar_par(`O número é: `+ numero))

