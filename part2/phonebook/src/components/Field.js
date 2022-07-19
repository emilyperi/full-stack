  const Field = (props) => {
    console.log(props.labelStyle)
    const inputStyle = {
      marginLeft: "5px",
      marginBottom: "5px"
    }
    const handleValueChange = (event) => {
        props.setValue(event.target.value)
      }
    return (
        <div>
            <span style={props.labelStyle}>{props.label}:</span>
            <input style={inputStyle} value={props.value} onChange={handleValueChange}/>
        </div>
    )
}
export default Field;