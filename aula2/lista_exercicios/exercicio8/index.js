
const verificar_ano = (ano)=>{

    let resultado =(ano % 4 == 0 && ano % 100 !== 0) ? "Ano bissexto" : "Não é bisesexto"
    return resultado

}

alert("Programa que verifica se um ano é bissexto")
let ano = Number(prompt("Digite o ano: (ex: 2024)"))
alert(verificar_ano(ano)) 

