import React from 'react';
import './ResultsContainer.css';
import MovieItem from '../../components/MovieItem/MovieItem';


const ResultsContainer = (props) => {    
    const {movies} = props;
    return (
        <div className="flex-container resultsBgColor" style={{minHeight:'500px'}}>
             {   
            movies && movies.length > 0
            ? movies.map(movie => { return <MovieItem key={movie.id} movie={movie}/>})               
            : <h3>No Films found</h3>
          }                 
            {props.children}
        </div>
    )
}

export default ResultsContainer;