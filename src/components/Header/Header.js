import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header(props){
    return (
        <header>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h2 style={{color:'#f65261'}}>netflix</h2>
                <span style={{color:'#f65261'}}>roulette</span>
            </Link>
            
        </header>
    );
}

export default Header;