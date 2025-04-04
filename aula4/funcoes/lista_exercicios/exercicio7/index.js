const verificar_valor = () => {
    let valor = Number(document.getElementById('valor').value)

    mensagem = 
    `
    Para R$ ${valor} você precisará de 

    ${valor / 200} Notas de R$ 200,00 reias\n
    ${valor / 100} Notas de R$ 100,00 reias\n
    ${valor / 50} Notas de R$ 50,00 reias\n
    ${valor / 20} Notas de R$ 20,00 reias\n
    ${valor / 5} Notas de R$ 5,00 reias\n
    ${valor / 1} Notas de R$ 1,00 reias\n

    `

    alert(mensagem)

}