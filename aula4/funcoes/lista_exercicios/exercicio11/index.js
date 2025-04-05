
//função que calcula o imposto de renda chamando uma função de calculo e define os parametros dela
const calcular_inss =()=>{

    salario = document.getElementById('salario').value 

    if(salario <= 1518){
        alert(calculo_matematico(salario, 7.5))
    }else if(salario >= 1518.01 && salario <= 2793.88){
        alert(calculo_matematico(salario, 9))

    }else if(salario >= 2793.89 && salario <= 4190.83){
        alert(calculo_matematico(salario, 12))
    }else{
        alert(calculo_matematico(salario,14))
    }

}


//Retorna  o valor do imposto
function calculo_matematico(salario, aliquota){
    let desconto = (salario * aliquota) / 100;
    return `Você deverá pagar ${(desconto).toFixed(2)} de INSS`
}