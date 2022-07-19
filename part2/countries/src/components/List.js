const List = ({items, searchText}) => {
    console.log(items)
    if (items.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    } else if (items.length > 1) {
        return (
            <>
            { items.map(item => <div key={item}>{item}</div>)}
            </>

        )
    }
}
export default List;