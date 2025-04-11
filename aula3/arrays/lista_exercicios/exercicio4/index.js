/* 

Desenvolva um programa que leia 10 números e apresente os valores pares. 
Caso não tenha nenhum número par apresente a mensagem “Todos os números são ímpares.”

*/

//Função que faz a verificação
const verificar_n_pares = (lista) => {

    let contador = 0
    let numeros_pares = lista.map((num) => {
        if(num % 2 == 0){
            contador+=1 // Adiciona mais um, ou seja tem numero par na lista
            return `É par: ${num}\n`
        
        }else{
            return `Não é par: ${num}\n`
        }
    })

    return (contador === 0) ? 'Todos os números são ímpares' : numeros_pares;

}


alert("Programa que verifica quais sao pares ou não !")

let i=1
let lista = []
while(i<=10){
    numero = Number(prompt("Digite um número"))
    lista.push(numero)
    i++
}

alert(lista)
alert(verificar_n_pares(lista))