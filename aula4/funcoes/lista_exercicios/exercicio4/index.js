const verificar_idade = () =>{
    let idade = document.getElementById('idade').value
    (idade >= 18)? alert('pode dirigir') : alert('Não pode dirigir')
}