import { useState } from "react"

const Stats = (props) => {
  const total = props.total
  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback has been given</p>
      </div>
    )
  }
  const average = (total > 0) ? (props.good - props.bad) / total : 0
  const positive = (total > 0) ? props.good / total * 100 : 0
     return (
     <div>
        <h1>Statistics</h1>
        <Table title="User Feedback">
          <Row text="Good" value={props.good} />
          <Row text="Neutral" value={props.neutral} />
          <Row text="Bad" value={props.bad} />
          <Row text="All" value={props.total}/>
          <Row text="Average" value={average}/>
          <Row text="Positive" value={positive} symbol='%'/>
        </Table>
      </div>
     )
}

const Table = ({title, children, colSpan}) => {
return (
  <table>
    <thead>
      <tr>
        <th colSpan={colSpan}>{title}</th>
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </table>
)
}


const Row = ({text, value, symbol}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}{symbol}</td>
    </tr>
  )
}

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Feedback = (props) => {
  return (
    <div>
    <h1>Give Feedback</h1>
    <Button handleClick={props.handleGood} text="Good" />
    <Button handleClick={props.handleNeutral} text="Neutral" />
    <Button handleClick={props.handleBad} text="Bad" />
    </div>
  )
}

function App(props) {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
 
  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }



  return (
  <>
    <Feedback handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} />
    <Stats good={good} neutral={neutral} bad={bad} total={total}/>
  </>
  );
}

export default App;
