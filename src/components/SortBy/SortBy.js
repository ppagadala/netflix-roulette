import React from 'react';
import './SortBy.css';

const SortBy = (props) => {
    const {sortBy:sortByHandler} = props;
    return (
        <span className="float-right">
            <span className="margin-5">SORT BY</span>        
            <button onClick={(e) => sortByHandler(e)} value="date">RELEASE DATE</button>
            <button onClick={(e) => sortByHandler(e)} value="rating">RATING</button>
        </span>
    )
};

export default SortBy;