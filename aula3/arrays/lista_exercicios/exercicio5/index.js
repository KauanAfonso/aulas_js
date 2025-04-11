/* 

Desenvolva um programa que leia 8 números garantindo que os valores informados estejam entre 100 e 200 
(caso não esteja apresente uma mensagem de “valor inválido”). Depois de preenchido apresente os valores armazenados.

*/


//Função que percorre a lista e armazena o num em outra ista se bater com a condição proposta
const numeros_armazenados = (lista) => {

    let num_armazenados = []
    lista.forEach(numero => {
        if(numero >= 100 && numero <= 200){
            num_armazenados.push(numero)
        }else{
            alert(numero + " valor inválido")
        }
    });

    return num_armazenados
}

alert('programa que verifica se  200<= numeros >=100 !')


//pedindo ao usuario
let i=1
let lista = []
while(i<=8){
    numero = Number(prompt("Digite um número: "))
    lista.push(numero)
    i++
}
//retornando
alert("Lista de numeros iniciais: "+ lista)
alert("lista de números permitidos: "+ numeros_armazenados(lista))