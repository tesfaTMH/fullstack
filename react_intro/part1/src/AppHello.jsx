const Hello = ({name, age}) => {
  const bornYear = () => {
    const yearNOw = new Date().getFullYear();
    return yearNOw - age
  }
  return (
    <div>
      <p> Hello {name}, you are {age} years old</p>
      <p>You were propably born in {bornYear()}</p>
    </div>
  )
}

const AppHello = () => {
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

export default AppHello;