import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Button = (props) => (
  <button onClick={props.handleClick} className="btn btn-secondary btn-lg">{props.text}</button>
)

function App() {

  const [good, setGood] = useState(0)
  const [netural, setNetural] = useState(0)
  const [bad, setBad] = useState(0)
  let total = good + netural + bad

  let average = (good-bad)/total
  let positive = (good/total)*100

  if(total === 0){
    return (
      <div>
        <div>
          <h1>Give Feedback</h1>
          <div className="d-grid gap-3 d-md-flex justify-content-md-begining">
            <Button handleClick={() => setGood(good + 1)} text="Good" />
            <Button handleClick={() => setNetural(netural + 1)} text="Netural" />
            <Button handleClick={() => setBad(bad + 1)} text="Bad" />
          </div>
        </div>

        <div>
          <h3>No Feedback given</h3>
        </div>
      </div>
    )
  } else {
    return(
      <div>
        <div>
          <h1>Give Feedback</h1>
          <div className="d-grid gap-3 d-md-flex justify-content-md-begining">
            <Button handleClick={() => setGood(good + 1)} text="Good" />
            <Button handleClick={() => setNetural(netural + 1)} text="Netural" />
            <Button handleClick={() => setBad(bad + 1)} text="Bad" />
          </div>
        </div>

        <div>
          <h1>Statistics</h1>
          <ul>
            <li>
              <h3>Good: {good}</h3>
            </li>
            <li>
              <h3>Netural: {netural}</h3>
            </li>
            <li>
              <h3>Bad: {bad}</h3>
            </li>
            <li>
              <h3>Total Feedback: {total}</h3>
            </li>
            <li>
              <h3>Average: {average}</h3>
            </li>
            <li>
              <h3>Positive Feedback: {positive}%</h3>
            </li>
            </ul>
        </div>
      </div>

    )
  }
}

export default App
