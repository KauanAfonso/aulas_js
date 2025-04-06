
//Função que calcula parcelas de um financiamento
function calcular_financiamento(){
    let valor_principal = document.getElementById('valor_principal').value
    let parcelas = document.getElementById('parcelas').value
    let juros = document.getElementById('juros').value

    //Parcela: P = (PV * i) / (1 – (1 + i)^-n) 
    let parcela = (valor_principal * (juros/100)) / (1-(Math.pow(1+(juros/100), -parcelas))) //o Math.pow foi utilizado para realizar exponenciações
    alert("Suas parcelas ficará no valor de: R$ " + parcela.toFixed(2))
}