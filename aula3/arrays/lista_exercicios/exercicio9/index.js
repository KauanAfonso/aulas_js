/* 

Desenvolva um programa que leia 5 números inteiros e armazene em um vetor A. 
Leia 5 números inteiros e armazene em um vetor B. 
Carregue e apresente um vetor C com os valores de A e B alternados. 


*/


let vetor1 = []
let vetor2 = []
let vetor3 = []
let numero
i = 5


alert('Programa que armazena valores de dois vetores de forma alternada')

do {
    numero = Number(prompt("Digite um número para o VETOR 1"))
    vetor1.push(numero)
    vetor3.push(numero)

    numero = Number(prompt("Digite um número para o VETOR 2"))
    vetor2.push(numero)
    vetor3.push(numero)
    i--

}while(i>0)

alert(`Primeiro vetor: [${vetor1}]\n Segundo vetor: [${vetor2}]\n Terceiro vetor, a mistura dos outros dois: [${vetor3}]`)