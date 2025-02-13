//Alert - exibe recados para meu querido suário,onde ele 
//resumindo quem mandou sou eu
window.alert("Olá mundo, estamos quebrando uma maldição")
alert("Já estava com saudades de Vocês !")

//prompt - é o input do python
//Serve para obter respostas do meu querido usuário
// Let: valore que podem ser adiquirida dos usuários durante o uso da aplicação, 
// const: valores imutavel, 
// var: é a forma legada de declarar variaveis, porem ainda visto em sistemas legados. 
let materia = prompt("Qual sua materia favorita? ")
document.body.innerHTML += `<p>${materia}</p>`


//confirm - serve para permitir escolha 
confirm("Ainda está aqui? ")

//exexemplo
//O Number é um funcao para definir qual a melhor forma de tipar o numero
//sendo melhor para int ou flaot
let nota1 = Number(prompt("Digite sua nota 1"))
let nota2 = Number(prompt("Digite sua nota 2"))
let media = (nota1 + nota2) / 2
document.body.innerHTML += `<p>Sua media : ${media}</p>`

//Estruturas de decisão
if(media >= 5){
    alert("Aprovado")
}else{
    alert("Reprovado")
}


//Laços de repetição
//for - normalmente sei quantas interações eu faço
for (let i = 100; i > 50; i--) {
    document.body.innerHTML += `<p>o número agora ${i}<p>`
}

//while - nescesito de uma condição, faço enquanto for correspondente a condição
contador = 0
while(contador<=100){
    document.body.innerHTML += `<h1>seu contador está em ${contador}</h2>`
    contador+=10
}


//do while - executa pelo menos uma vez e ao final verifica a condição
let i = 1;
do{
    if( i % 2 == 0){
        document.body.innerHTML += `<h2>${i} É par <br></h2>`
    }else{
        document.body.innerHTML += `<h2>${i} É impar <br> </h2>` 
    }

    i+=1
}while( i <= 20)


//switch_case - Mutltipla escola mediante a condição

let opcao = Number(prompt("Digite a opção 1 - soma, 2-subtração, 3-multiplicação, 4-Divisão"))

let valor1 = Number(prompt("digite um valor"))
let valor2 = Number(prompt("digite um valor"))

switch(opcao){
    case 1:
        soma = valor1 + valor1
        alert(`A soma de ${valor1} + ${valor2} = ${soma}`)
        break
    case 2:
        sub = valor1 - valor1
        alert(`A sub de ${valor1} - ${valor2} = ${sub}`)
        break
    case 3:
        mult = valor1 - valor1
        alert(`A mult de ${valor1} * ${valor2} = ${mult}`)
        break
    case 4:
        div = valor1 / valor1
        alert(`A div de ${valor1} / ${valor2} = ${div}`)
        break
    
    default:
        alert("opção inválida")
}