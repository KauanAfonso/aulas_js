const verificar_par = (numero) =>{
    resultado = (numero % 2 == 0) ? "par" : "Impar"
    return resultado
}

numero = Number(prompt("Digite um número: "))
alert(verificar_par(numero))