/*
2. Desenvolva um programa que a partir de um vetor de inteiros com 8 valores inicializados na declaração 
   apresente a média aritméticas desses valores.
*/

//Função que calcula reduzindo a lista
const media_aritimetica = (lista) => {
    let media = lista.reduce((acumulador,valor) => {
        return acumulador+=valor
    },0)
    
    return media / lista.length
}

//boas vindas
alert('Programa que calcua a media!')

//pedidno numero ao user
let i=1
let lista = []
while(i<=8){
    numero = Number(prompt("Digite um número"))
    lista.push(numero)
    i++
}
//chamando a funcao
alert("Sua media foi de: " + media_aritimetica(lista))