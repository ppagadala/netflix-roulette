import React from 'react';
import './SearchBy.css';

const SearchBy = (props) => {
    const {searchBy:searchByHandler} = props;
    return (
        <div className="margin-10">
        <span className="margin-5">SEARCH BY</span>        
        <button onClick={(e) => searchByHandler(e)} value="title">Title</button>
        <button onClick={(e) => searchByHandler(e)} value="genre">Genre</button>
        </div>
    )
};

export default SearchBy;