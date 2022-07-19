import Field from './Field'
const AddContact = (props) => {
    const addPerson = (event) => {
        event.preventDefault()
        const index = props.persons.map(person => person.name).indexOf(props.newName)
        if (index < 0) {
          const newPerson = {
            name: props.newName,
            number: props.newNumber
          }
          props.setPersons(props.persons.concat(newPerson)) 
      
        } else {
          alert(`${props.newName} is already added to phonebook`)
        } 
        props.setNewName('')
        props.setNewNumber('')  
      }
    
    return(
        <>
        <h3>Add Contact</h3>
        <form onSubmit={addPerson}>
        <Field label="name" value={props.newName} setValue={props.setNewName}/>
        <Field label="number" value={props.newNumber} setValue={props.setNewNumber}/>
        <div>
          <button  type="submit">add</button>
        </div>
      </form>
      </>
    )
}

export default AddContact;