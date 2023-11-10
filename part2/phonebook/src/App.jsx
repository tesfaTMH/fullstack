import { useState } from "react";
import Person from "./components/Person";
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    const personsObj = {
      name: newName,
      id: persons.length + 1
    }
    const found = persons.find(person => person.name === personsObj.name)
    setPersons(persons.concat(personsObj))
    setNewName('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  return (
    <div className="container">
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div> {persons.map(person => 
        <Person key={person.name} person={person} />)}</div>
      {console.log(persons)}
    </div>
  )
}

export default App