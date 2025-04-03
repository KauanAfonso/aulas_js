
/*

Função que pega os valores do usuário e a operação escolhida, com isso retorna o calculo por meio 
do eval() que é capaz de retornar uma string em codigo javascript

*/
const Calcular = ()=>{
    let numero1 = Number(document.getElementById('numero1').value)
    let numero2 = Number(document.getElementById('numero2').value)
    let operacao = document.getElementById('operacao').value

    let calculo = `${numero1} ${operacao} ${numero2}`
    alert(eval(calculo)) 
    return eval(calculo)
}

