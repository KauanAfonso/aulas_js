

const verificar_imc = (imc)=>{
    if(imc < 18.5){
        return "Baixo"
    }
    else if(imc>=18.5 && imc <= 24.9){
        return "Normal"
    }    
    else if(imc>=25 && imc <= 29.9){
        return "Sobrepeso"
    }
    else if(imc>=30 && imc <= 34.9){
        return "Obesidade I"
    }
    else if(imc>=35 && imc <= 39.9){
        return "Obesidade II"
    }else{
        return "Obesidde III"
    }
}


const calcular_imc = (peso, altura) =>{
    let imc = peso / (altura * altura)
    return verificar_imc(imc)
}

alert('Programa que retorna imc')
let peso = Number(prompt("Digite seu peso "))
let altura = Number(prompt("Digite sua altura "))

alert(calcular_imc(peso,altura)) //teste

