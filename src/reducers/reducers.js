import {GET_ALL_MOVIES,GET_MOVIE_DETAILS,UPDATE_FILTERED_MOVIES} from "../constants/constants";
const state = {
    movies:[],
    filteredMovies:[],
    movieDetails:undefined,
    filteredMoviesBySpecificGenre:[]
}
function appReducer(state,action){
    switch(action.type){
        case GET_ALL_MOVIES:{
            state = {...state,movies:action.payload}            
            return state;            
        }            
        case UPDATE_FILTERED_MOVIES:{
            state = {...state,filteredMovies:action.payload};
            return state;                
        }
        case GET_MOVIE_DETAILS:{
            let filteredMoviesBySpecificGenre = [];
            if(state.movies){
                filteredMoviesBySpecificGenre = state.movies.filter(movie => {            
                    let matchedGeneres = movie['genres'].map(element =>{
                        return action.payload.genres.includes(element)
                    });
                    return matchedGeneres.includes(true);
                });
            }            
            state = {...state,movieDetails:action.payload,filteredMoviesBySpecificGenre:filteredMoviesBySpecificGenre};            
            return state;            
        }
            
        default:
            return state;
    }
}

export default appReducer;