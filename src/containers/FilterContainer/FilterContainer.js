import React from 'react';
import './FilterContainer.css';

const FilterContainer = (props) => {
    return (
        <div className="App-filter-container"> 
            {props.children}
        </div>
    )
}

export default FilterContainer;
