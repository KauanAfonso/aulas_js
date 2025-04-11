/*
1. Desenvolva um programa que a partir de um vetor de inteiros com 5 valores inicializados na declaração 
   apresente o dobro de cada valor armazenado.
*/

//calculando o dobro
const retornar_dobro = (lista) => {
    let lista_dobro = lista.map((num) => {
        return num * 2
    })

    return lista_dobro
}


//Pedir os valores ao usuario
let i=1
let lista = []
while(i<=5){
    numero = Number(prompt("Digite um número"))
    lista.push(numero)
    i++
}
    

alert("Lista dobrada: " + retornar_dobro(lista))