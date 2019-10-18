import React from "react";
import "./MoviesBySpecificGenre.css";
import {Link} from 'react-router-dom';
import MovieItem from "../MovieItem/MovieItem";

function MoviesBySpecificGenre(props){
    const {movies} = props;
    return(
        <div className="flex-container" style={{minHeight:'500px'}}>
            {
                movies && movies.length > 0
                ? movies.map(movie => { 
                    let link =`/movies/${movie.id}`
                    return <Link to={link} key={movie.id} style={{ textDecoration: 'none' }}>
                                <MovieItem movie={movie}/>
                            </Link>
                    })               
                : <h3 style={{margin: 'auto'}}>No Films found</h3>
            }            
        </div>
        
    )
}

export default MoviesBySpecificGenre;