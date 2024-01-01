import { useState } from "react";
import Person from "./components/Person";
import './App.css'

const Search = ({ persons, searchTarget }) => {
  return (persons.filter(person => person.name.toLowerCase() === searchTarget.name.toLowerCase() ))
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    const personsObj = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1
    }
    const found = persons.find(person => person.name === personsObj.name)
    if(found){
      alert(personsObj.name + ' is already added to phonebook')
      setNewName('')
      setNewPhone('')
    } else {
      setPersons(persons.concat(personsObj))
      setNewName('')
      setNewPhone('')
    }
  }


  return (
    <div className="container">
      <h1>Phonebook</h1>
      <form>
        <div>
          <strong>Filter shown with</strong>: <input 
                              type="text"
                              value={newSearch}
                              onChange={(event) => setNewSearch(event.target.value)}
                              placeholder="Type to search..."  
                            /> 
        </div>
      </form>
      <div>
        <h2>Add a new person</h2>
        <form onSubmit={addPerson}>
          <div>
            <strong>Name</strong>: <input 
                    type="text"
                    value={newName}
                    onChange={(event) => setNewName(event.target.value)}
                    placeholder="Enter your name..."
                  />
          </div>
          <div>
          <strong>Phone</strong>: <input
                    type="text"
                    value={newPhone}
                    onChange={(event) => setNewPhone(event.target.value)}
                    placeholder="Enter your phone number..."
                  />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
      <h2>Numbers</h2>
      <div> 
        {persons.filter((nameToSearch) =>{
          if (newSearch == ""){
            return nameToSearch
          } else if(nameToSearch.name.toLowerCase().includes(newSearch.toLowerCase())){
            return nameToSearch
          }
        }).map(person => 
        <Person key={person.name} person={person} />)}</div>
      {console.log(persons)}
    </div>
  )
}

export default App