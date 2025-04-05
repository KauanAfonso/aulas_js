//verificação de imposto de renda
function calcular_imposto(){
    salario = document.getElementById('salario').value 

    //definir IR e parcela com base no salario chmando uma func para calcular
    //alem de definir a aliquota e o valor da parcela
    if(salario <= 2259.20){
        alert("Isento")
    }else if(salario >= 2259.21 && salario <= 2826.65){
        alert(calculo_matematico(salario, 7.5, 169.44))

    }else if(salario >= 2.866,66 && salario <= 3751.05){
        alert(calculo_matematico(salario,15,381,44))

    }else if(salario >= 3751.06 && salario <= 4664.68){
        alert(calculo_matematico(salario, 22.5, 662.77))
        
    }else{
        alert(calculo_matematico(salario,27.5, 896))
    }

}

//Retorna a aliquota - parcela
function calculo_matematico(salario, aliquota, parcela){
    let desconto = (salario * aliquota) / 100;
    return `Você deverá pagar ${(desconto - parcela).toFixed(2)} de IR`
}