/* 

Desenvolva um programa que leia 8 números garantindo que os valores informados estejam entre 100 e 200 
(caso não esteja apresente uma mensagem de “valor inválido”). Depois de preenchido apresente os valores armazenados.

*/


const numeros_armazenados = (lista) => {

    let num_armazenados = []
    lista.forEach(numero => {
        if(numero >= 100 && numero <= 200){
            num_armazenados.push(numero)
        }else{
            console.log("valor inválido")
        }
    });

    return num_armazenados
}

let numeros = [100,500,150,165,264,133]
console.log(numeros)
console.log(numeros_armazenados(numeros))