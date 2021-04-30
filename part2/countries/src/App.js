import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './Countries'
import Filter from './Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(res => {
      setCountries(res.data)
    })
  }, [])

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter}></Filter>
      <Countries countries={filteredCountries}></Countries>
    </div>
  )
}

export default App
