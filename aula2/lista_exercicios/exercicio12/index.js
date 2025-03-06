const calcular_fatorial = (numero) => {
    let valor_total = 1;

    for(let i = numero; i > 0; i--){
        valor_total *= i
    }
    
    alert(valor_total)
}



const numero = Number(prompt("Digite um número: "))
calcular_fatorial(numero)