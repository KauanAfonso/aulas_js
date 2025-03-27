/* 

6. Desenvolva um programa que a partir de um vetor de Strings com 10 nomes inicializados na declaração 
   leia um novo nome e verifique se ele está armazenado no vetor, se estiver, apresenta a posição (índice) onde ele está, 
   caso contrário, apresente a mensagem “Nome não encontrado!”

*/




const verificar_nome_lista = (lista, nome) => {
    let res = 'Não encontrado'
    lista.forEach(elemento,index => {
        if (elemento == nome) {
            res =`O nome está na posição ${index}`
        }
    })


    return res
}


let lista_nome = ['Kauan', "Cris", "Pedro", "Marcos", "João", "Arthur", "Miguel", "Jorge", "Natan"]
nome = prompt("Digite um nome para buscar na lista: ")
console.log(verificar_nome_lista(lista_nome, nome))