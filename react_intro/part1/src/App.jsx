const Hello = (props) => {
  return (
    <div>
      <p> Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Abebe'
  const age = 45
  return (
    <div>
      <h1> Greetings</h1>
      <Hello name="Michael" age={26+50}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App;