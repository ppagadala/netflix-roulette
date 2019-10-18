import { GET_ALL_MOVIES,GET_MOVIE_DETAILS,UPDATE_FILTERED_MOVIES,UPDATE_MOVIES_BY_SPECIFIC_GENRE } from "../constants/constants";
import { func } from "prop-types";
function getAllMovies(dispatch){
    fetch('https://reactjs-cdp.herokuapp.com/movies')
    .then(res => res.json())
    .then(data => {      
      dispatch({
        type:GET_ALL_MOVIES,
        payload:data.data
      });
      dispatch({
        type:UPDATE_FILTERED_MOVIES,
        payload:data.data
      });
    })
    .catch(error => {
      console.log('Looks like there was a problem: \n', error);
    });     
}

function updateFilteredMovies(dispatch,data){
    dispatch({
        type:UPDATE_FILTERED_MOVIES,
        payload:data
    });
}

function getMoviesDetails(dispatch,movieId){
    fetch(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`)
    .then(res => res.json())
    .then(data => {
                    
        dispatch({
            type:GET_MOVIE_DETAILS,
            payload:data
        })
    })
    .catch(error => {
        console.log('Looks like there was a problem: \n', error);
    });     
}
function updateMoviesBySpecificGenre(dispatch,moviesBySpecificGenre){
    dispatch({
        type:UPDATE_MOVIES_BY_SPECIFIC_GENRE,
        payload:moviesBySpecificGenre
    });
}

export {
    getAllMovies,
    getMoviesDetails,
    updateFilteredMovies,
    updateMoviesBySpecificGenre
}
