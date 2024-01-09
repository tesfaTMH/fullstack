import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { CountryInformation } from './components/CountryInformation'

function App() {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [isShow, setIsShow] = useState(false)

  const toggleShow = ({country}) => {
    setIsShow(isShow => !isShow)
  }

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
        console.log(response.data.name.common)
      })
  },[])

  const filteredSearch = countries.filter(country => 
    country.name.common.toLowerCase().includes(searchCountry))
  console.log(filteredSearch)

  return (
    <div className='container'>
      <div>
        <span className='bold'>Find countries: </span>
        <input
          type='text'
          id='countryName'
          value={searchCountry}
          onChange={event => setSearchCountry(event.target.value)}
          placeholder='Type a name of country...'
        />
        <hr />
      </div>
      <div>
        {searchCountry === ' ' ? [ ]
        : filteredSearch.length > 5
        ? <p>Too many search results, add more charcters to narrow the search</p>
        : filteredSearch.map(country =>(
        filteredSearch.length <= 5 && filteredSearch.length > 1
        ? <div key={country.cca2}>
          {country.name.common}
          <button key={country.cca2} onClick={() => setIsShow(!isShow)}>{isShow ? 'HIDE' : 'SHOW'}</button> 
          {isShow && <CountryInformation key={country.cca2} countryInfo={country} />} 
        </div>
        : <CountryInformation key={country.cca2} countryInfo={country} />))}
      </div>
    </div>
  )
}

export default App
