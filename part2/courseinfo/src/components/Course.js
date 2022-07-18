import Part from "./Part";
import Header from "./Header";

const Course = ({course, total}) => {
    return (
      <div>
        <Header text={course.name} />
        {course.parts.map(part =>
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
        <p><strong>Total of {total} exercises</strong></p>
      </div>
    )
  }

export default Course;