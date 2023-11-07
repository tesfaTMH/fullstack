import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

const Button = (props) => {
  return (
    <button onClick={props.onClick} className='btn btn-sm btn-primary col-xs-5 margin-left'>
      {props.text}
    </button>
  )

}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  // create a state for list of votes equal to anecdotes length
  let votelist = new Array(anecdotes.length).fill(0)
  const [vote, setVote] = useState(votelist)

  // index of the list with maximum vote 
  let max_index = vote.indexOf(Math.max(...vote))

  const handleClick = () => {
    let rand_num = Math.floor(Math.random()*anecdotes.length)
    setSelected(rand_num)
  }

  const handleVote = () => {
    const voteCopy = [...vote]
    voteCopy[selected] += 1
    setVote(voteCopy)
  }

  return (
    <div className='justify-content-center'>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <h6>has {vote[selected]} votes</h6>
      </div>
      
      <Button onClick={handleVote} text='Vote' />

      <Button onClick={handleClick} text='Next Anecdote' />

      <div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[max_index]}
        <h6>has {vote[max_index]} votes</h6>
      </div>
    </div>
  )
}

export default App