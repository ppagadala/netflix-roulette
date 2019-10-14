import React from 'react';
import './ResultsContainer.css';

const ResultsContainer = (props) => {
    return (
        <div style={{minHeight:'500px'}}>
            {props.children}
        </div>
    )
}

export default ResultsContainer;