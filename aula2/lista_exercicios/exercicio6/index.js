const calcular_media = (nota1, nota2) =>{
    let media = (nota1 + nota2) / 2

    let resultado = (media > 6.0)? "Acima da média" : "Não acima da média"
    let par_impar = (media % 2 == 0) ? "par" : "Impar"

    alert(resultado + "Sua média é : " + par_impar)
}

alert('Programa que retorna se a media está acima e se ela é par ou impar')
let nota1 = Number(prompt("Digite a nota1 "))
let nota2 = Number(prompt("Digite a nota2 "))

calcular_media(nota1,nota2)

