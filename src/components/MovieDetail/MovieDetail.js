import React,{Component} from 'react';
import './MovieDetail.css'
import MovieItemDetail from '../MovieItemDetail/MovieItemDetail';
import { connect } from "react-redux";
import { getMoviesDetails } from "../../actions/actons";

class MovieDetail extends Component{    
    constructor(props){
        super(props);                
    }
     componentDidMount(){        
        let movieId = this.props.match.params.movieId;
        this.props.getMoviesDetails(movieId);
    } 

    render(){        
        return(
            <>
                {
                    this.props.movieDetails ?     <MovieItemDetail movie={this.props.movieDetails}></MovieItemDetail> : null
                }
                
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        movieDetails : state.movieDetails 
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        getMoviesDetails : (movieId) => getMoviesDetails(dispatch,movieId)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetail);