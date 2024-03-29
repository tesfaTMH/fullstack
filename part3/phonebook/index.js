const express = require('express')
const morgan = require('morgan')
//middleware to use and allow for requests from all origins
const cors = require('cors')
//middleware for defining enviroment variables 
require('dotenv').config()

const Person = require('./models/person')

app = express()

app.use(express.json())
app.use(cors())
// add static content of frontend to backend for deploying in fly.io using static built-in express middleware
app.use(express.static('dist'))

//minimal logging output using predefined tiny
//app.use(morgan('tiny'))

//token for host
morgan.token('host', (req, res) => {
  return req.hostname
})
//use host parameter for customized logging output
app.use(morgan(':method :host :url :status :res[content-length] - :response-time ms'))

//use host parameter and token argument for customized logging output
//app.use(morgan(':method :host :url :status :param[id] :res[content-length] - :response-time ms'))
//morgan.token('param', (req, res, param) => {
//  return req.params[param]
//})

// middleware for error handling 
const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError' ) {
    return res.status(400).send({
      error: 'malformatted id'
    })

    next(error)
  }
}

//unknown endpoint handler 
const unknownEndpoint = (req, res) => {
  res.status(404).send({
    error: 'unknown endpoint'
  })
}

{/*const persons = [
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
*/}

{/*app.get('/api/persons', (req, res) => {
  res.json(persons)
})
*/}

// get all phonebook information from MongoDB
app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

{/*app.get('/info', (req, res) => {
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
*/}

// Find by id using data from MongoDB
app.get('/api/persons/:id', (req, res) => {
  Person.findById(req.params.id)
    .then(person => {
      if(person){
        res.json(person)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => {
      next(error)
    })
})

{/*app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

  res.status(204).end()
})
*/}
// delete person from MongoDB 
app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

{/*const randomId = () => {
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
*/}

// add person to phonebook MongoDB
app.post('/api/persons', async (req, res) => {
  const body = req.body
  const query = { name: body.name }
  
  if (body.name === undefined || body.number ===undefined){
    return res.status(400).json({
      error: 'person info missing. Check if name and phone number are defined'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
  }
  // Checks if name exist. If exists update number else create a new phoonebook entry
  Person.findOneAndUpdate(query, person, { new: true, upsert: true })
      .then(updatedPerson => {
        res.json(updatedPerson)
      })
      .catch(error => next(error))
})

//update person in MongoDB
app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body
  
  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {
      res.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})