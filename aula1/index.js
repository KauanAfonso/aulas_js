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

if(media >= 5){
    alert("Aprovado")
}else{
    alert("Reprovado")
}

