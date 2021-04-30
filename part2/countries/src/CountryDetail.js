import React from 'react'

const CountryDetail = ({ country }) => {
    return (
        <div>
            <h3>{country.name}</h3>

            <div>capital: {country.capital}</div>
            <div>population: {country.population}</div>

            <h2>languages</h2>
            <div>
                {
                    country.languages.map(language => <li key={language.name}>{language.name}</li>)
                }
            </div>

            <img src={country.flag} alt='' width="150" height='100'></img>
        </div>
    )
}

export default CountryDetail
