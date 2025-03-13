/* 

Desenvolva um programa que leia 10 números e apresente os valores pares. 
Caso não tenha nenhum número par apresente a mensagem “Todos os números são ímpares.”

*/


const verificar_n_pares = (lista) => {

    let numeros_pares = lista.map((num) => {
        if(num % 2 == 0){
            return num
        }else{
            return "Não é par"
        }
    })

    return numeros_pares
}

let numeros = [10,5,8,6,4,9]
console.log(numeros)
console.log(verificar_n_pares(numeros))