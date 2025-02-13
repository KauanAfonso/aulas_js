const converter_celsius = (valor) =>{
    return ((valor * 9) / 5) + 32
}

alert('Programa que retorna grau celsius em Fahrenheint ')
let valor = Number(prompt("Digite um número? "))
alert("Valor em F°, "+ converter_celsius(valor))

