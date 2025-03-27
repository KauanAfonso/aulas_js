import estilos from './BarraNavegacao.module.css'

//estrutura

export function BarraNavegacao(){
    return (
        <nav className={estilos.continer}>
            <ul>
                <li>Home</li>
                <li>Filmes</li>
                <li>Perfil</li>
            </ul>
        </nav>
    )
}