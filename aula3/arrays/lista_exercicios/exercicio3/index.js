/*
3. Desenvolva um programa que leia a idade de 20 pessoas
e apresente as idades acima da média.
*/


//Aqui descobriremos qual a media de idade
const media_aritimetica = (lista) => {
    let media = lista.reduce((acumulador,valor) => {
        return acumulador+=valor
    },0)
    
    return media / lista.length
}


//
const media_idades = (idades) =>{
    let media = media_aritimetica(idades)
    let contador = 0

    alert(`media de idades: ${media}`)
    idades.forEach(idade => {
        (idade > media) ?contador+=1:contador
    });

    return contador
}


alert('Programa que retorna quantas pessoas tem idade acima da media de idades ')

let i=1
let lista = []
while(i<=20){
    numero = Number(prompt("Digite uma idade: ex: 20"))
    lista.push(numero)
    i++
}

alert(media_idades(lista) + " Pessoa(s) tem a idade maior que a media de idades")