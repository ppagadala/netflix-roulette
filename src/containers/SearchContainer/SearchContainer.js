import React from 'react';
import './SearchContainer.css';

const SearchContainer = (props) => {
    return (
        <div className="searchContainer">
            {props.children}
        </div>
    )
}

export default SearchContainer;