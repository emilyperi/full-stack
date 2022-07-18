import Course from "./components/Course";

function App(props) {
  const courses = [
    {
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
  const total0 = courses[0].parts.reduce((sum, p) => sum + p.exercises, 0)
  const total1 = courses[1].parts.reduce((sum, p) => sum + p.exercises, 0)

  return (
    <>
    <h1>Web development curriculum</h1>
    <Course course={courses[0]} total={total0}/>
    <Course course={courses[1]} total={total1}/>
    </>
  )
}

export default App;
