import axios from "axios";
import React, {useState, useEffect} from "react";
import { Card } from "./Card";


const APi_URl = 'https://api.themoviedb.org/3';
const API_KEY = '';


export function Lista() {
    const [movies, setMovies] = useState([]);

    //()parametros, {}script de programação, []dependencias
    useEffect(() => {
        axios.get(`${APi_URl}/movie/popular?api_key=${API_KEY}&language=pt-BR`)
            .then(response => {
                console.log(response.data.results);
                setMovies(response.data.results);
            })
            .catch(error => {
                console.log('erro: ' + error);
            })
    }, []);

    return (
        <div>
            <figure>
                {movies.map(movie => (
                    <Card key={movie.id}
                    
                    movie={movie}
                        
                    />
                ))}
            </figure>
        </div>
    )


}
