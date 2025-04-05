
//função que verifica dados do usuário
const verificar_cadastro = ()=>{

//Pegando informações
let nome = document.getElementById('nome').value
let endereco = document.getElementById('endereco').value
let sexo = document.getElementsByName('sexo').value
let telefone = document.getElementById('telefone').value
let celular = document.getElementById('celular').value
let email = document.getElementById('email').value

//verificando se estão vazios
if(nome == '' || endereco =='' || sexo == "" || telefone == "" || celular == "" || email == ""){
    alert('Preencha todos os dados')
}else{
    alert("usuario cadastrado")
}

}

let formulario = document.getElementById('form')

//Ao formulario ser enviado chamar a função de verificar cadastro
formulario.addEventListener('submit', (ev)=>{
    ev.preventDefault()
    verificar_cadastro()
})

