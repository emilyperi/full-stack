import {useState} from 'react'
import Search from './components/Search'
import AddContact from './components/AddContact'
import Contacts from './components/Contacts'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "800-123-4567" }, 
    { name: 'Ada Lovelace', number: "666-666-6667"}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [showAll, setShowAll] = useState(true)

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
