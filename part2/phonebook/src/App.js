import {useState, useEffect} from 'react'
import axios from 'axios'
import Search from './components/Search'
import AddContact from './components/AddContact'
import Contacts from './components/Contacts'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => setPersons(response.data))
  }

  useEffect(hook, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <Search searchName={searchName} setSearchName={setSearchName} showAll={showAll} setShowAll={setShowAll} />
      <AddContact persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
      <Contacts persons={persons} searchName={searchName} showAll={showAll} />
    </div>
  );
}

export default App;
