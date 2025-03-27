/*

7. Desenvolva uma nova versão do programa anterior em que o usuário terá a quantidade de tentativas limitada a 5. 
   Caso o nome seja encontrado apresente a posição (índice) onde ele está e em qual tentativa ele foi encontrado.

*/


const contador = () =>{
    
}

const verificar_nome_lista = (lista, nome) => {
    let res = 'Não encontrado'
    let acertou_palavra = false
    lista.forEach((elemento, index) => {
        if (elemento.toUpperCase() == nome.toUpperCase()) {
            res = `O nome está na posição ${index}`
            acertou_palavra = true       
        }
    })

    return { res, acertou_palavra }
}


let lista_nomes = ['Kauan', "Cris", "Pedro", "Marcos", "João", "Arthur", "Miguel", "Jorge", "Natan"]
let i = 0
let jogo 
while (i <= 5) {
    let nome = prompt("Digite um nome para buscar na lista: ")
    jogo = verificar_nome_lista(lista_nomes, nome)
    if (jogo.acertou_palavra) {
        alert('Você acertou um nome na lista')
        alert(jogo.res)
        break
    }

    i+=1
}

if (jogo.acertou_palavra === false) {
    alert('Você perdeu..')
}
