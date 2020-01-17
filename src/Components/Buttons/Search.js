import React from 'react';

/**
 * Search Component Component
 */
function Search() {
    return (
        <form className="form-inline md-form form-sm active-cyan-2 mt-2">
            <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
            <i className="fa fa-search" aria-hidden="true" style={{padding:'10px'}}></i>
        </form>
    );
}

export default Search;