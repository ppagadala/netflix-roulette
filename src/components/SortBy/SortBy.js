import React from 'react';
import './SortBy.css';

const SortBy = (props) => {
    const {sortBy:sortByHandler} = props;
    return (
        <span className="float-right">
            <span className="margin-5">SORT BY</span>        
            <button className={props.sortByProp ==='date' ? 'button-active' : ''} onClick={(e) => sortByHandler(e)} value="date">RELEASE DATE</button>
            <button className={props.sortByProp ==='rating' ? 'button-active' : ''} onClick={(e) => sortByHandler(e)} value="rating">RATING</button>
        </span>
    )
};

export default SortBy;