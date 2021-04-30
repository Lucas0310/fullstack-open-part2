import React, { useState } from 'react'
import CountryDetail from './CountryDetail'

const Country = ({ country }) => {
    const [showCountryDetail, setShowCountryDetail] = useState('')

    const clickHandler = () => {
        setShowCountryDetail(country)
    }

    if (showCountryDetail) return <CountryDetail country={country}></CountryDetail>

    return (
        <div>
            {country.name} <button onClick={clickHandler}>show</button>
        </div>
    )
}

export default Country
