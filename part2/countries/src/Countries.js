import React from 'react'
import CountryDetail from './CountryDetail'
import Country from './Country'

const Countries = ({ countries }) => {

    if (countries.length > 10) return <div>Too many matches, specify another filter</div>

    if (countries.length === 1) return <CountryDetail country={countries[0]}></CountryDetail>

    return (
        <div>
            {
                countries.map(country => <Country key={country.name} country={country}></Country>)
            }
        </div>
    )
}

export default Countries
