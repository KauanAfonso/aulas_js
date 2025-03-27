/* 

Desenvolva um programa que leia 6 números inteiros e armazene em um vetor A. 
Carregue um vetor B (de mesmo tipo e tamanho) com a metade dos valores armazenados em A. 
Apresente os valores dos dois vetores.

*/


const exercicio_8 = (lista) => {
    let novo_vetor = lista.map((numero) => {
        return numero/2
    })

    return novo_vetor
}

let minha_lista = [10, 5, 6, 9, 8, 15, 3, 6, 33, 4]

alert(`Primeiro vetor: ${minha_lista}\n Vetor com metade dos valores: ${exercicio_8(minha_lista)}`)