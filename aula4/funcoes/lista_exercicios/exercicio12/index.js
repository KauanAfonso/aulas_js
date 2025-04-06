//FUnção que calcula o juros compostos
const calcular_juros = () =>{
    let capital = document.getElementById('capital').value
    let tempo = document.getElementById('tempo').value
    let juros = document.getElementById('juros').value

    //Calculo para descobrir o montante
    let montante = capital * ((1 + (juros/100))^tempo)
    alert("Seu investimento no final será de: " + montante)
}