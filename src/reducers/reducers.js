import {GET_ALL_MOVIES,GET_MOVIE_DETAILS,UPDATE_FILTERED_MOVIES} from "../constants/constants";
const state = {
    movies:[],
    filteredMovies:[],
    movieDetails:undefined
}
function appReducer(state,action){
    switch(action.type){
        case GET_ALL_MOVIES:{
            const newState = Object.assign({},state,{movies:action.payload});
            return newState
            break;
        }
            
        case UPDATE_FILTERED_MOVIES:{
            const newState = Object.assign({},state,{filteredMovies:action.payload});
            return newState
            break;    
        }
        case GET_MOVIE_DETAILS:{
            const newState = Object.assign({},state,{movieDetails:action.payload});
            return newState
            break;    
        }
            
        default:
            return state;
    }
}

export default appReducer;