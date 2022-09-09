import logo from './logo.svg';
import './App.css';


const students = ['mohamed', 'ali', 'hossam', 'hello', 'man']

function AppTest() {
  // const studentElements = []
  // for (const s of students) {
  //   studentElements.push(<li >{s}</li>)
  // }

  // const studentElements = students.map( s => {
  //   return <li>{s}</li>
  // })

  const elements = []
  students.forEach(student => {
    elements.push(<li>{student}</li>)

  })


  const studentElements = students.map(s =>
   <li>
      <p>{s}</p>
      <p>{s}</p>
    </li>
  )


  return (
    <ol>

      {
        studentElements
      }
    </ol>
  )
}



function App() {

}
export default App;
