import Field from './Field'

const Search = (props) => {
      const handleSearch = (event) => {
        event.preventDefault()
        props.setShowAll(!props.showAll)
        if (!props.showAll) {
          props.setSearchName('')
        }
      }
    return (
        <form onSubmit={handleSearch}>
            <Field label="Search by name" value={props.searchName} setValue={props.setSearchName} />
            <button type="submit">{props.showAll ? "search" : "clear"}</button>
        </form>
    )
}

export default Search;