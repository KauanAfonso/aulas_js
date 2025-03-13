//variaveis: espaçoes em memoria que armazenam valores
//let = valores variaveis que recebeo em meio a execução, 
//const = valores fixos no codigo.
//var = primeira forma de delcarar uma varíavel, porém hoje 
//é obsoleta
//escopo diz respeito a como eu vou usar as variavei criadas
//quando criada, uma variavel dentro de uma função, eka é uada somente
//dentro dela
//ainda temos mais 1 tipo de variavel em Js o arrray , que é um conjuto de dados


let numeros = [10,5,18,50,3,15,22,45,9,87]

//-----------------------------------------------------------Repetição de array-----------------------------------------------


console.log('-----------------------------------------------')

//para saber os valores do array
for (let valor of numeros) {
    console.log(`for of: ${valor}`)
}



console.log('-----------------------------------------------')

// //para saber os indicies do array
for (let indicie in numeros) {
    console.log( `for in: ${indicie}`)
    
}


console.log('-----------------------------------------------')

//forEach é umafunção para a manipulação de um array
numeros.forEach(numero =>{
    console.log(`forEach: ${numero}`)})

//-----------------------------------------------------------Metodos de array-----------------------------------------------

//iserir um elemento no final da lista
numeros.push(60)

//inserir no inicio da fila
numeros.unshift(0)

//exclir no inicio do array 
numeros.shift()

//excluir no final do array
numeros.pop()


//----------------------------------------------------------- Funções de callbak: -----------------------------------------------

//func callback: eu interajo com o meu array trato a informação 
//e guardo o resultado em uma nova varíavel.

//MAP: Percorro todo o array, faço alguma coisa com valor
// e guardo na varíavel de retorno ( funcao callback )
let numerosDobrados = numeros.map((numero) => {
    return numero * 2
})

console.log(numerosDobrados)


//Filter: Ele percorre o array, e guarda no array
//retorno o valor correspondente a uma condição
let numerosDiv3 = numeros.filter((valor) =>{
    return valor % 3 === 0
})
console.log(numerosDiv3)


//find: percorre o array e paro assim que achar o valor
let primerioPar = numeros.find((num_par) => {
    return num_par % 2 === 0
})

console.log(`${primerioPar}`)