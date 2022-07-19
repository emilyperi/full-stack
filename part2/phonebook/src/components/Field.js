  const Field = (props) => {
    const inputStyle = {
        marginLeft: "5px",
        marginBottom: "5px"
      }
    const handleValueChange = (event) => {
        props.setValue(event.target.value)
      }
    return (
        <div>
            {props.label}: <input style={inputStyle} value={props.value} onChange={handleValueChange}/>
        </div>
    )
}
export default Field;