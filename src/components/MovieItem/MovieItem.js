import React from 'react';
import './MovieItem.css';

const MovieItem = (props) => {
    return (
        <div className="margin-20">
            <img src={props.movie.poster_path} alt={props.movie.title} height="400" width="250"/>
            <div>
                <span>{props.movie.title}</span>
                <p>{props.movie.genres && props.movie.genres.join(' & ')}</p>
                <p>{props.movie.release_date}</p>
                <p>{props.movie.vote_average}</p>
            </div>
        </div>                
    );
}

export default MovieItem;