const retornar_tabuada = (numero)=>{

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} == ${numero * i}`)
    }

}

alert("Programa que retorna a tabuada de um numero até o 10")
let num = Number(prompt("Digite o valor: "))


alert("Resultado no console")
retornar_tabuada(num)


