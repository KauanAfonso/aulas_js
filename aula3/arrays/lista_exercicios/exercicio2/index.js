/*
2. Desenvolva um programa que a partir de um vetor de inteiros com 8 valores inicializados na declaração 
   apresente a média aritméticas desses valores.
*/


const media_aritimetica = (lista) => {
    let media = lista.reduce((acumulador,valor) => {
        return acumulador+=valor
    },0)
    
    return media / lista.length
}


console.log(media_aritimetica([10,10, 8, 9,5,10,8,6]))