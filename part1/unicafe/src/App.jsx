import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Button = (props) => (
  <button onClick={props.handleClick} className="btn btn-primary btn-lg">{props.text}</button>
)

// staticline component
const StatisticLine = (props) => (
  <button onClick={props.handleStatics} className="btn btn-secondary btn-lg">{props.text}</button>
)

function App() {

  const [good, setGood] = useState(0)
  const [netural, setNetural] = useState(0)
  const [bad, setBad] = useState(0)

  // state for storing a single statics 
  const [value, setValue] = useState(0)

  //total number of feedbacks
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

        <div className="table-responsive-sm">
          <h1>Statistics</h1>
          <table className="table table-striped table-bordered table-sm table-success">
            <tbody>
              <tr>
              <th>Feedback</th>
              <th>Score</th>
            </tr>
            <tr>
              <td>Good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>Netural</td>
              <td>{netural}</td>
            </tr>
            <tr>
              <td>Bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{total}</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>{average}</td>
            </tr>
            <tr>
              <td>Positive</td>
              <td>{positive}</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h1>A single Statistics</h1>
          <div className="d-grid gap-3 d-md-flex justify-content-md-begining">
            <StatisticLine handleStatics={() => setValue(good)} text="Good" />
            <StatisticLine handleStatics={() => setValue(netural)} text="Netural" />
            <StatisticLine handleStatics={() => setValue(bad)} text="Bad" />
            <h2>{value}</h2>
          </div>
        </div>
      </div>

    )
  }
}

export default App
