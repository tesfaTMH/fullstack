const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p><b>Total of {sum} exercises</b> </p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    <Part
      part={parts[0]} 
    />
    <Part
      part={parts[1]} 
    />
    <Part
      part={parts[2]} 
    />
    <Part part={parts[3]}
    />      
  </>

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
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
        id: 3
      }
    ]
  }

  return (
    <>
      <Course course={course} />
      <Total sum={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises} />
    </>
  )
}

export default App