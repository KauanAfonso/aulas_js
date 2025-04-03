import estilos from './BarraNavegacao.module.css';

//estrutura

export function BarraNavegacao(){
    return (
        <nav className={estilos.container}>
            <ul>
                <li>Home
                    <span class="material-symbols-outlined">home</span>
                </li>
                <li>Filmes<span class="material-symbols-outlined">tv</span></li>
                <li>Perfil<span class="material-symbols-outlined">person</span></li>
            </ul>
        </nav>
    )
}