import logo from './logo.svg';
import './App.css';



const StudentList = ({students})=>{
  return <ol>
    {students.map(student => <li key={student}>{student}</li> )}
  </ol>
}

function App() {
  const students = ['mohamed', 'ali', 'hossam', 'hello', 'man']

  // const studentElements = []
  // for (const s of students) {
  //   studentElements.push(<li >{s}</li>)
  // }

  // const studentElements = students.map( s => {
  //   return <li>{s}</li>
  // })


  // const elements = []
  // students.forEach(student => {
  //   elements.push(<li>{student}</li>)

  // })


  // const studentElements = students.map(s =>
  //  <li>
  //     <p>{s}</p>
  //     <p>{s}</p>
  //   </li>
  // )


  return (
    <StudentList students={students} />
  )
    // <ol>

    //   {
    //     studentElements
    //   }
    // </ol>
  
}




export default App;
