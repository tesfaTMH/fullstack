const Header = ({ course }) => <h1>{course}</h1>
// total exercises sum using for loop
{/*const Total = ({ parts }) => {
  let arrayOfExercises = []
  for (let i=0; i < parts.length; i++){
    arrayOfExercises.push(parts[i].exercises)
  }
  const sum = arrayOfExercises.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue
  }, 0)
  return <p><b>Total of {sum} exercises</b> </p>
}*/}

// total exercises sum using reduce
const Total = ({parts}) => {
  const sum = parts.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue.exercises
  }, 0)
  return <p><b>Total of {sum} exercises</b> </p>
}

// Part component
const Part = ({ name, exercises }) => 
  <p>
    {name} {exercises}
  </p>

// Content component drived from child Part component
{/*const Content = ({ parts }) => {
  const partComponent = []
  for (let i=0; i < parts.length; i++){
    partComponent.push(<Part part={parts[i]} key={parts[i].id} />)
  }
  return partComponent
}*/}

// Content component drived from child Part component using map
const Content = ({ parts }) => {
  return(<div>
    {parts.map((partContent, indexPart) => {
    return (<Part name={partContent.name} exercises={partContent.exercises} key={indexPart} />)
  })}
  </div>)
}
  

const Course = ({ course }) => 
  <>
    <Header 
      course={course.name} 
    />
    <Content 
      parts={course.parts}
    />
  </>

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <>
        <Course course={course[0]} />
        <Total parts={course[0].parts} />
      </>
      <>
        <Course course={course[1]} />
        <Total parts={course[1].parts} />
      </>
    </>
  )
}

export default App