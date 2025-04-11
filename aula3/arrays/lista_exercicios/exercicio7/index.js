/*

7. Desenvolva uma nova versão do programa anterior em que o usuário terá a quantidade de tentativas limitada a 5. 
   Caso o nome seja encontrado apresente a posição (índice) onde ele está e em qual tentativa ele foi encontrado.

*/



//verificação do nome
const verificar_nome_lista = (lista, nome) => {
    let res = 'Não encontrado'
    let acertou_palavra = false
    lista.forEach((elemento, index) => {
        if (elemento.toUpperCase() == nome.toUpperCase()) {//padronizando a paavra
            res = `O nome está na posição ${index}`
            acertou_palavra = true       
        }
    })

    return { res, acertou_palavra } //retornando a resposta , e se ele acertou a palavra
}


let lista_nomes = ['Kauan', "Cris", "Pedro", "Marcos", "João", "Arthur", "Miguel", "Jorge", "Natan"]
let i = 5 //tentaivas
let jogo 

//Enquanto ele não acertar um nome na lista continue o loop
while (i > 0) {
    let nome = prompt("Você tem " + i + " chances " + "Digite um nome para buscar na lista: ")
    jogo = verificar_nome_lista(lista_nomes, nome)
    if (jogo.acertou_palavra) {
        alert('Você acertou um nome na lista')
        alert(jogo.res) //retornando a propriedade resposta se foi ou não encotrado
        break
    }

    i--
}

//verificação se perdeu o game
if (jogo.acertou_palavra === false) {
    alert('Você perdeu..')
}
