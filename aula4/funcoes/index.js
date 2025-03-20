/*Funções: é um bloco de código que tem como preocupação a reutiliação
deste.

A ideia principal, é fazer valer a modularidade e a simplicidade das carateristicas de um algoritimo

function nomeFunção(atributos) {} script que será usado

cleanCode: não repetir codigos, as variaveis e funções deem ter nomes apropriados para o uso/os
espaçamentos devem seguir as boas praticas/ e trazer a documentação nescessaria para ser manutenivel.

*/

function saudar(){
    alert("Olá mundo");
}
function soma(a,b){
    //console.log() aparece somente no inspecionar,e o 
    //usuário não ve diretamente.
    console.log(a)
    return a + b
}

function somarVarios(a=0,b=0,c=0,d=0){
    return a + b + c + d
}

function converterMaiusculo(texto){
    return texto.toUpperCase();
}

function qtdCaracteres(texto){
    return texto.length;
}

//limpando espaços e iniciais
function limparEspaços(){
    return frase.trim();
}

//chamar func para ser executada
saudar()
let resultado = soma(10,20)
let resultadoVarios = somarVarios(10,20,30,40)

//apresenta no corpo do HTMl
document.write(resultado)
document.write(`<p> Soma varios numeros ${resultadoVarios} </p>`)

let frase = prompt("Informe uma frase: ")

let fraseGrande = converterMaiusculo(frase)
let qtd_caracteres = qtdCaracteres(frase)

document.write(`<p>Frase grande: ${fraseGrande} </p>`)
document.write(`<p> a quantidade de caracters em ${frase} é de: ${qtd_caracteres}`)

let limpo = limparEspaços(frase)
document.write(`<p>Texto limpo: ${limpo}</p>`)

let h1 = window.document.getElementsByTagName('h1')[0];
h1.style.color = 'blue';

let corpo = window.document.body;
corpo.style.backgroundColor = "#168788"

//mudar cor de uma div
function mudarCor(){
    let div = document.getElementById('minha_div')

    if(div.style.backgroundColor == "aqua"){
        div.style.backgroundColor = "green";
    }else{
        div.style.backgroundColor = "aqua";
    }
}


