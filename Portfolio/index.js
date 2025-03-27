import { base_links } from "./database.js";


const area = document.getElementById('conteudo_atividades')
let area_row = document.getElementsByClassName('row')[0]
let contador = 0

base_links.forEach(element => {


    area_row.innerHTML +=  `<div class="col-3" style="padding: 15px;">
        <div class="card ${element.Assunto}" style="width: 18rem; !important">
            <div class="card-body">
                <h5 class="card-title">${element.exercicio}</h5>
                <h5 class="card-title">${element.Assunto}</h5>
                <p class="card-text">${element.descricao}</p>
                <a href=${element.link} class="btn btn-light">Go somewhere</a>
            </div>
        </div>
    </div>`;
    contador+=1
    if(contador == 4){
        let novaRow = document.createElement("div");
        novaRow.classList.add("row", "mb-3");
        area.appendChild(novaRow);
        area_row = novaRow; // Atualiza a referência para a nova row
        contador = 0;
    }

});