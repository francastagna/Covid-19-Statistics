import React from 'react';
import './SearchBox.css'

const SearchBox = ({placeholder, handleChange}) => {
    return(
        <input type='search'
        className='SearchBox'
        placeholder={placeholder}
        onChange = {handleChange}
        />
    )
}

export default SearchBox;