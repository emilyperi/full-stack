import {useState} from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }, { name: 'Ada Lovelace'}
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson))
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button  type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <tbody>
      {persons.map(person => 
        <tr key={person.name}><td>{person.name}</td></tr>)}
        </tbody>
      </table>

    </div>
  );
}

export default App;
