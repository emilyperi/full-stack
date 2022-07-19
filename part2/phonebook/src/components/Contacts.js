const Contacts = (props) => {
    const personsToShow = props.showAll 
    ? props.persons
    : props.persons.filter(person => person.name.toLowerCase() === props.searchName.toLowerCase())

    return (
        <>
        <h3>Contacts</h3>
        <table>
            <tbody>
                {personsToShow.map(person => 
                <tr key={person.name}>
                    <td>{person.name}</td>
                    <td>{person.number}</td>
                </tr>)}
            </tbody>
      </table>
      </>
    )
}

export default Contacts;