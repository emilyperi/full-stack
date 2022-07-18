import {useState} from 'react'

const inputStyle = {
  marginLeft: "5px",
  marginBottom: "5px"
}

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "800-123-4567" }, { name: 'Ada Lovelace', number: "666-666-6667"}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addPerson = (event) => {
    event.preventDefault()
    const index = persons.map(person => person.name).indexOf(newName)
    if (index < 0) {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson)) 
  
    } else {
      alert(`${newName} is already added to phonebook`)
    } 
    setNewName('')
    setNewNumber('')  
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }
  const handleFilter = (event) => {
    event.preventDefault()
    setShowAll(!showAll)
    if (!showAll) {
      setSearchName('')
    }
  }

  const personsToShow = showAll 
    ? persons
    : persons.filter(person => person.name.toLowerCase() === searchName.toLowerCase())



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFilter}>
        <div>Search by name: <input style={inputStyle} value={searchName} onChange={handleSearchName}/></div>
        <button type="submit">{showAll ? "search" : "clear"}</button>
      </form>
      <br/>
      <form onSubmit={addPerson}>
        <div>
          name: <input style={inputStyle} value={newName} onChange={handleNameChange}/>
          <div>
            number: <input style={inputStyle} value={newNumber} onChange={handleNumberChange}/></div>
        </div>
        <div>
          <button  type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <tbody>
      {personsToShow.map(person => 
        <tr key={person.name}>
          <td>{person.name}</td>
          <td>{person.number}</td>
          </tr>)}
        </tbody>
      </table>

    </div>
  );
}

export default App;
