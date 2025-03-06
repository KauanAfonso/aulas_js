
const jogar=(nome,escola)=>{    
   const numero_maquina = Math.floor(Math.random() * 3)  + 1
   alert(`${nome} você escolheu: ${informar_escolhas(escola)}`)
   alert(`O computador escolheu: ${informar_escolhas(numero_maquina)}`)
   alert(verificar_gahador(nome,escola, numero_maquina))
   renderizar(verificar_gahador(nome,escola,numero_maquina))
}


const renderizar = (mensagem) =>{
    document.body.innerHTML += `<p>${mensagem}</p>`
}

const informar_escolhas = (escola) =>{
    if(escola == 1){return "papel"}
    else if(escola == 2){return "Tesoura"}
    else{return "Pedra"}
}

const verificar_gahador = (nome, escolha, escolha_máquina)=>{
    if(escolha == escolha_máquina){
        return "Empate"
    }else if(escolha == 1 && escolha_máquina == 2){
        return "Computador venceu"
    }else if(escolha == 1 && escolha_máquina == 3){
        return `${nome} venceu`
    }else if(escolha == 2 && escolha_máquina == 1){
        return `${nome} venceu`
    }else if(escolha == 2 && escolha_máquina == 3){
        return "Computador venceu"
    }else if(escolha == 3 && escolha_máquina == 1){
        return "Computador venceu"
    }else if(escolha == 3 && escolha_máquina == 2){
        return `${nome} venceu`
    }else{
        return "Algum erro na lógica"
    }
}

const nome = prompt("qual o seu nome: ")
const escolha = Number(prompt("Papel, Tesoura e Pedra\nDigite 1 para papel\nDigite 2 para tesoura\nDigite 3 para pedra"))
jogar(nome,escolha)

