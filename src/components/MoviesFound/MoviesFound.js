import React from 'react';
import './MoviesFound.css';

const MoviesFound = (props) => {
    let result;
    if(props.moviesFound){
        result = <span className="float-left">{props.moviesFound} movies found</span>
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