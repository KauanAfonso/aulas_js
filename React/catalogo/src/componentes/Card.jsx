import estilos from './Card.module.css';

//passagem de parametros é o props
export function Card({ movie, onOpenModal}) {
    return (
        <div className={estilos.container}>
            
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}onClick={() => onOpenModal(movie)} />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
        </div>
    );   
}