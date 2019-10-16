import React from 'react';
import './MovieItem.css';

const MovieItem = (props) => {
    const {movie} = props;
    return (
        <div className="margin-20">
            <img src={movie.poster_path} alt={movie.title} height="400" width="250"/>
            <div>
                <span>{movie.title}</span>
                <p>{movie.genres && movie.genres.join(',')}</p>
                <p>{movie.release_date}</p>
                <p>{movie.vote_average}</p>
            </div>
        </div>                
    );
}

export default MovieItem;