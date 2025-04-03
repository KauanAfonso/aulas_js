
const Inverter = (palavra)=>{
    return palavra.split('').reverse().join("")//SPlit transforma em um arrai, o reverse inverte as posições e join junta tudo sem espaços
}

//chamando btn e quando for clicado pegue o valor e retorne uma alert com a func inverter passando a palavra
document.getElementById('btn').addEventListener('click', ()=>{
    palavra = document.getElementById("palavra").value
    alert(Inverter(palavra))
})