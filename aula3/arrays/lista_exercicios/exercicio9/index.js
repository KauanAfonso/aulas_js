/* 

Desenvolva um programa que leia 5 números inteiros e armazene em um vetor A. 
Leia 5 números inteiros e armazene em um vetor B. 
Carregue e apresente um vetor C com os valores de A e B alternados. 


*/


const alternar_vetores = (vetor1, vetor2) => {
    vetor3 = []
    
}   

let vetor1 = []
let vetor2 = []
let vetor3 = []
let numero
i = 10

do {
    numero = parseFloat(prompt("Digite um número para o primeiro número"))
    vetor1.push(numero)
    vetor3.push(numero)

    numero = parseFloat(prompt("Digite um número para o primeiro número"))
    vetor2.push(numero)
    vetor3.push(numero)
    i--

}while(i>0)

alert(`Primeiro vetor: [${vetor1}]\n Segundo vetor: [${vetor2}]\n Terceiro vetor, a mistura dos outros dois: [${vetor3}]`)