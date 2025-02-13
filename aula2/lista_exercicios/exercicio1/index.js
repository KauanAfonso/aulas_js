const calcular_diferenca = (numero1, numero2) =>{
    return numero1 - numero2
}

let numero1 = Number(prompt("Digite um número: "))
let numero2 = Number(prompt("Digite um número: "))
alert(`Diferença de ${numero1} - ${numero2} = ${calcular_diferenca(numero1,numero2)}`)