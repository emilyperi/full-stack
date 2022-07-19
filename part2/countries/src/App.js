import {useState, useEffect} from 'react'
import axios from 'axios'
import Country from './components/Country'
import List from './components/List'

function App() {
  const [countries, setCountries] = useState([])
  const [selectCountry, setSelectCountry] = useState({
    name: {},
    capital: '',
    area: '',
    flag: '',
    languages: {}
  })
  const [searchText, setSearchText] = useState([])
  const [namesToShow, setNamesToShow] = useState([])

  const dataHook = () => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(result => {
      setCountries(result.data)
    })
  }
  useEffect(dataHook, [])

  const showNamesHook = () => {
    const names = countries.map(country => country.name.common)
    const found = names.filter(name => 
      name.match(new RegExp(`[a-z]*(${searchText})[a-z]*`, "gi")) !== null)
    
    setNamesToShow(found)

    if (found.length === 1) {
      const index = names.indexOf(found[0])
      setSelectCountry({
        name: countries[index].name,
        capital: countries[index].capital[0],
        area: countries[index].area,
        flag: countries[index].flags.png,
        languages: countries[index].languages
      })   
    }
  }
  useEffect(showNamesHook, [searchText])

  const handleSearch = (event) => {
    setSearchText(event.target.value)
  }

  return (
    <div> 
      <form>
        <label>Search for country by name: </label>
        <input value={searchText} onChange={handleSearch}></input>
      </form>
      <List items={namesToShow} searchText={searchText}/>
      {namesToShow.length === 1
      ? <Country selectCountry={selectCountry} />
      : <div></div>}
    </div>
  );
}

export default App;
