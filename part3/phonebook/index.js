const express = require('express')

app = express()

app.use(express.json())

const persons = [
    { 
      id: 1,
      name: "Arto Hellas", 
      number: "040-123456"
    },
    { 
      id: 2,
      name: "Ada Lovelace", 
      number: "39-44-5323523"
    },
    { 
      id: 3,
      name: "Dan Abramov", 
      number: "12-43-234345"
    },
    { 
      id: 4,
      name: "Mary Poppendieck", 
      number: "39-23-6423122"
    }
]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  const dateToday = new Date()
  res.send(`
            <h1>Phonebook has info for ${persons.length} persons</h1>
            <p>${dateToday}</p>
        `)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  
  if (person){
    res.json(person)
  } else {
    res.status(404).end()
  }

})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

  res.status(204).end()
})

const randomId = () => {
  return Math.floor(Math.random()) + persons.length
}

app.post('/api/persons', (req, res) => {
  const body = req.body

  const found = persons.find(person => person.name === body.name)
  if(found){
    return res.status(400).json({
      error: 'name must be unique'
    })
  }
  if(!body.name || !body.number){
    return res.status(400).json({
      error: 'content missing'
    })
  }

  const person = {
    id: randomId(),
    name: body.name,
    number: body.number,
    date: new Date()
  }

  persons = persons.concat(person)
  res.json(persons)

})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})