import React,{Component} from 'react';
import './MovieDetail.css'
import MovieItemDetail from '../MovieItemDetail/MovieItemDetail';
import { connect } from "react-redux";
import { getMoviesDetails,updateMoviesBySpecificGenre } from "../../actions/actons";
import MoviesBySpecificGenre from '../MoviesBySpecificGenre/MoviesBySpecificGenre';

class MovieDetail extends Component{        
     componentDidMount(){        
        let movieId = this.props.match.params.movieId;
        this.props.getMovieDetails(movieId);        
    } 
    
    componentDidUpdate(previousProps){
        if(previousProps.match.params.movieId !== this.props.match.params.movieId){
            this.props.getMovieDetails(this.props.match.params.movieId);
        }
    }
    

    render(){              
        return(
            <>
                {
                    this.props.movieDetails ?     <MovieItemDetail movie={this.props.movieDetails}></MovieItemDetail> : null
                }
                {
                    this.props.movieDetails ? <div>
                        <span>Films by <span style={{fontWeight:'bold'}} className='margin-5'>{this.props.movieDetails.genres.join(',')}</span> genre</span>
                    </div> : null
                }
                {
                    
                    this.props.filteredMoviesBySpecificGenre && this.props.filteredMoviesBySpecificGenre.length >= 0 ? <MoviesBySpecificGenre movies={this.props.filteredMoviesBySpecificGenre}/> : null
                }
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        movieDetails : state.movieDetails,
        filteredMoviesBySpecificGenre : state.filteredMoviesBySpecificGenre
                
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetails : (movieId) => getMoviesDetails(dispatch,movieId),
        updateMoviesBySpecificGenre : (moviesBySpecificGenre) => updateMoviesBySpecificGenre(dispatch,moviesBySpecificGenre),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetail);