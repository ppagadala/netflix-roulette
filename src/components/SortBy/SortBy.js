import React from 'react';
import './SortBy.css';

const SortBy = (props) => {
    return (
        <span className="float-right">
            <span className="margin-5">SORT BY</span>        
            <button>RELEASE DATE</button>
            <button>RATING</button>
        </span>
    )
};

export default SortBy;