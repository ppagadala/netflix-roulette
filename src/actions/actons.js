import { GET_ALL_MOVIES,GET_MOVIE_DETAILS,UPDATE_FILTERED_MOVIES } from "../constants/constants";
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

export {
    getAllMovies,
    getMoviesDetails,
    updateFilteredMovies
}
