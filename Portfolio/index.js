import { base_links } from "./database.js";


const area = document.getElementById('conteudo_atividades')
let area_row = document.getElementsByClassName('row')[0]
let contador = 0

base_links.forEach(element => {


    area_row.innerHTML +=  `<div class="col-md-3 col-sm-12 col-lg-3" >
        <div class="card ${element.Assunto}" style="width: 15rem; height: 18rem !important; padding:1.2rem;">
            <div class="card-body">
                <h5 class="card-title" >${element.exercicio}</h5></strong>
                <h5 class="card-title p_${element.Assunto}">${element.Assunto}</h5>
                <p class="card-text">${element.descricao}</p>
                <a href=${element.link} class="btn btn-light">Visualizar</a>
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