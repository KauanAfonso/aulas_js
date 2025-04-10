const converter_dinheiro = (valor, taxa)=>{

    let total = valor + (valor * (taxa/ 100))
    return total.toFixed(2)

}

alert("Programa que retorna o valor convertido com uma taxa adicionada")
let valor = Number(prompt("Digite o valor: ex: 59.99 "))
let taxa = Number(prompt("Digite a taxa: ex 1.5 "))


alert(converter_dinheiro(valor, taxa))

