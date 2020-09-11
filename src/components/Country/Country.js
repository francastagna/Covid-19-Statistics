import React from 'react';
import './Country.css' 
const Country = ({stats}) => {

    return(
        <div className='Country'>
            <h1>{stats.name}</h1>
            <img src={`https://www.countryflags.io/${stats.code.toLowerCase()}/shiny/64.png`} alt={stats.name}></img>
            <div className='Description'>
                <p>{`Population : ${stats.population}`}</p>
                <p>{`Confirmed : ${stats.latest_data.confirmed}`}</p>
                <p>{`Recovered : ${stats.latest_data.recovered}`}</p>
                <p>{`Deaths : ${stats.latest_data.deaths}`}</p>

            </div>
        </div>
    )

}

export default Country;