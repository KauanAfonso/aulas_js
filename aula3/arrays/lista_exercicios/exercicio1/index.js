/*
1. Desenvolva um programa que a partir de um vetor de inteiros com 5 valores inicializados na declaração 
   apresente o dobro de cada valor armazenado.
*/


const retornar_dobro = (lista) => {
    let lista_dobro = lista.map((num) => {
        return num * 2
    })

    return lista_dobro
}


console.log(retornar_dobro([2,15,20,6,4]))