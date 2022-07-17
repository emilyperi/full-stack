import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Anecdote = ({text, votes}) => {
  return (
    <>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </>
  )
}
function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState ([0, 0, 0, 0, 0, 0, 0])

  const handleNext = () => {
    const next = getRandomInt(7)
    setSelected(next)
  }
  console.log(selected)


  const handleVote = () => {
    const tmp = [ ...points ]
    tmp[selected] += 1
    setPoints(tmp) 
  }

  const winner = points.indexOf(Math.max(...points));
  
    

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} votes={points[selected]} />
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNext}>Next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <Anecdote text={anecdotes[winner]} votes={points[winner]} />


    </div>
  )
}

export default App;
