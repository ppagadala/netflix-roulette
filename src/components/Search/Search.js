import React from 'react';
import './Search.css';

const Search = (props) => {
    const {change:changeHandler} = props;
    return (        
        <input type="text" name="search" placeholder="Search by Name" onChange={ (e) => changeHandler(e)} className="margin-5"/>        
    )
};

export default Search;