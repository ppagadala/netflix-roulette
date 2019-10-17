import React from 'react';
import './SearchBy.css';

const SearchBy = (props) => {
    const {searchBy:searchByHandler} = props;
    return (
        <div className="margin-10">
        <span className="margin-5">SEARCH BY</span>        
        <button className={props.searchByProp==='title' ? 'button-active' : '' } onClick={(e) => searchByHandler(e)} value="title">Title</button>
        <button className={props.searchByProp==='genres' ? 'button-active' : '' } onClick={(e) => searchByHandler(e)} value="genres">Genre</button>
        </div>
    )
};

export default SearchBy;