/*
3. Desenvolva um programa que leia a idade de 20 pessoas
e apresente as idades acima da média.
*/

const media_aritimetica = (lista) => {
    let media = lista.reduce((acumulador,valor) => {
        return acumulador+=valor
    },0)
    
    return media / lista.length
}


const media_idades = (idades) =>{
    let media = media_aritimetica(idades)
    let contador = 0

    console.log(`media de idades: ${media}`)
    idades.forEach(idade => {
        (idade > media) ?contador+=1:contador
    });

    return contador
}

let idades = [8,15,66,40,2,9,34,18]
console.log(idades)
console.log(media_idades(idades) + " Pessoa(s) tem a idade maior que a media de idades")