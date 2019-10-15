import React from 'react';
import './SearchButton.css';


const SearchButton = (props) => {
    const {search:searchHandler} = props;
    return (        
        <button className="margin-5" onClick={searchHandler}>Search</button>
    )
};

export default SearchButton;