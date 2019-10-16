import React from 'react';
import {Link} from 'react-router-dom';
import './ResultsContainer.css';
import MovieItem from '../../components/MovieItem/MovieItem';


const ResultsContainer = (props) => {    
    const {movies} = props;
    return (
        <div className="flex-container resultsBgColor" style={{minHeight:'500px'}}>
             {   
            movies && movies.length > 0
            ? movies.map(movie => { 
                let link =`/movies/${movie.id}`
                return <Link to={link} key={movie.id}>
                            <MovieItem movie={movie}/>
                        </Link>
                })               
            : <h3>No Films found</h3>
          }                 
            {props.children}
        </div>
    )
}

export default ResultsContainer;