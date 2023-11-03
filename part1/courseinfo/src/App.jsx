// Header component 
const Header = ({course}) => {
  return <h1>{course}</h1>
}

// Part component for using in Content component
const Part = ({part, exercises}) => {
  return(<p>{part} {exercises}</p>)
}

// Content component 
const Content = ({part1, part2, part3}) => {
  return (
    <div>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </div>
  )
}

// Total component 
const Total = ({part1, part2, part3}) => {
  return(<p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>)
}


function App() {
  // const-definitions 
  const course = 'Half Stack application development'
  const part1 = { 
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = { 
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />     
    </div>
  )
}

export default App
