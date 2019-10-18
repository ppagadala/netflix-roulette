import React from 'react';
import {Link} from 'react-router-dom';
import './MovieItemDetail.css';
import { connect } from "react-redux";


const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
})
  
const mapDispatchToProps = {
    // ... normally is an object full of action creators
}

const MovieItemDetail = (props) => {
    const {movie} = props;    
    return (
        <div className="movieItemDetailBgColor">
            <div>
                <Link to='/movies'>
                    <button className="margin-20" style={{float:'right'}}>Back to Movies</button>
                </Link>                
            </div>
            <div className="flex-container margin-20">
                <div className="margin-20" style={{flex:'1 1 100px'}}>
                    <img src={movie.poster_path} alt={movie.title} height="400" width="250"/>            
                </div>
                <div className="margin-20" style={{flex:'9 9 300px'}}>
                    <h2>
                        {movie.title}
                    </h2>
                    <span className={'rating'}>
                        {movie.vote_average}
                    </span>
                    <p>
                        {movie.genres && movie.genres.join(',')}
                    </p>
                    <p>
                        <span style={{margin:'20px 0px',color:'#f65251'}}>
                            {movie.release_date ? new Date(movie.release_date).getFullYear() : '0000'}
                        </span>
                        <span className="margin-20" style={{color:'#f65251'}}>
                            {movie.runtime ? movie.runtime : 0} <span style={{color:'#f65251'}}>min</span>
                        </span>
                    </p>
                    <p>
                        {movie.overview}
                    </p>
                </div>            
            </div>
        </div>
                        
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieItemDetail);