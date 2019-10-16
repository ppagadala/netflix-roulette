import React,{Component} from 'react';
import {useParams} from 'react-router-dom';
import './MovieDetail.css'
import MovieItemDetail from '../MovieItemDetail/MovieItemDetail';

class MovieDetail extends Component{    
    constructor(props){
        super(props);
        this.state = {movieDetails:{}};        
    }
     componentDidMount(){        
         let movieId = this.props.match.params.movieId;
        fetch(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`)
        .then(res => res.json())
        .then(data => {            
            this.setState({
                movieDetails:data
            })
        })
        .catch(error => {
            console.log('Looks like there was a problem: \n', error);
        }); 
    } 

    render(){        
        return(
            <div className="movieDetailBackground">
                <MovieItemDetail movie={this.state.movieDetails}></MovieItemDetail>
            </div>
        )
    }
}

export default MovieDetail;