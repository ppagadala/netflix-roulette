import React from 'react';
import './MoviesFound.css';

const MoviesFound = (props) => {
    let result;
    if(props.numberOfMoviesFound){
        result = <span className="float-left">{props.numberOfMoviesFound} movies found</span>
    }else{
        result = null;
    }
    return (
        <span>
           {result}                 
        </span>
    )
};

export default MoviesFound;