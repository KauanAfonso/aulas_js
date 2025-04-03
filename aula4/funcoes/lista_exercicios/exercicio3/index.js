const mostrar_letras = ()=>{
    let palavra = document.querySelector('input').value
    palavra.split('').forEach(letra => {
            document.body.innerHTML += letra + "<br>"

    });

}