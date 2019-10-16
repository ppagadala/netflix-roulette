import React from 'react';
import {useLocation} from 'react-router-dom';
import './NoMatch.css';

function NoMatch() {
    let location = useLocation();

    return (
        <div className="noMatchBgColor">
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

export default NoMatch;