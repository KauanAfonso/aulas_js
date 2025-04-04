//Função que calcula quantos minutos é um horario no formato 00:00.

const calcular_minuto = ()=>{
    let horario = document.getElementById('horario').value //obtendo valor
    const horario_lista = horario.split(':') //quebrando o valor em uma lista a partir do : e guardando o valor
    let resultado = eval((horario_lista[0] *60) + eval(horario_lista[1])) //calcular o horas para minuto + os minutos que ja tinham 

    alert(resultado)
}