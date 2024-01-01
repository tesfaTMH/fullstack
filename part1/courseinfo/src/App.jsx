// Header component 
const Header = ({ name }) => {
  return <h1>{name}</h1>
}

// Part component for using in Content component
const Part = ({ part, exercises }) => {
  return(<p>{part} {exercises}</p>)
}

// Content component 
const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

const totalSum = course.parts.reduce((sum, x) =>{
  return sum + x.exercises
}, 0)
// Total component 
const Total = ({parts}) => {
  //return(<p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>)
  
  return (
    <div>
      <p>Number of exercises: {(totalSum)}</p>
    </div>
  )
}


function App() {
  // const-definitions 
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />     
    </div>
  )
}

export default App
