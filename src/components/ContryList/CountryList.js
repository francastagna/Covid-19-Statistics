import React from 'react';
import Country from '../Country/Country';
import './CountryList.css';

const CountryList = (props) => {
    return(
        <div className='CountryList'>
            {
                props.countries.map(
                    country => <Country key={country.code} stats={country} />
                )
            }
        </div>
    )
}

export default CountryList;