const verificar_numeros = () =>{
    lista_num = []
    let numero1 = document.getElementById('numero1').value
    let numero2 = document.getElementById('numero2').value
    let numero3 = document.getElementById('numero3').value

    lista_num.push(numero1,numero2, numero3)
    lista_num.sort((a,b)=> a-b)
    alert(`Numeros em ordem crescente: ${lista_num}`)
}