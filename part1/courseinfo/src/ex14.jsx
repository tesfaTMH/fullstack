// Header component 
const Header = ({course}) => {
  return <h1>{course}</h1>
}

// Part component for using in Content component
const Part = ({part, exercises}) => {
  return(<p>{part} {exercises}</p>)
}

// Content component 
const Content = ({part}) => {
  return (
    <div>
      <Part part={part[0].name} exercises={part[0].exercises} />
      <Part part={part[1].name} exercises={part[1].exercises} />
      <Part part={part[2].name} exercises={part[2].exercises} />
    </div>
  )
}

// Total component 
const Total = ({part}) => {
  return(<p>Number of exercises {part[0].exercises + part[1].exercises + part[2].exercises}</p>)
}


function App() {
  // const-definitions 
  const course = 'Half Stack application development'
  const parts = [
   { 
    name: 'Fundamentals of React',
    exercises: 10
    },
    { 
    name: 'Using props to pass data',
    exercises: 7
    },
    {
    name: 'State of component',
    exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part={parts} />
      <Total part={parts} />     
    </div>
  )
}

export default App
