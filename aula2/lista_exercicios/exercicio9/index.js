const converter_dinheiro = (valor, taxa)=>{

    let total = valor + (valor * taxa)
    return total

}

alert("Programa que retorna o valor convertido")
let valor = Number(prompt("Digite o valor: "))
let taxa = Number(prompt("Digite a taxa: "))


alert(converter_dinheiro(valor, taxa))

