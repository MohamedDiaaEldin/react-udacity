import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Book from './Book'
import { get, getAll } from './BookAPI';

function App() {
  const getBooks =async ()=>{
    return [{id:0, name:'linux book'}, {id:1, name:'windows book'}]
  }
  const [books, setBooks] = useState([])
  useEffect(()=>{
    console.log('from effect')
    const getAllBooks = async()=>{      
        const books = await getAll();
        setBooks(books)     
    }
    getAllBooks()
    
  }, [])
  

  const [selected, setSelected] = useState('')
  const changeHandler = (e)=>{
    console.log(e.target.value)
  }
  
  return (
    <select selected={selected}>
      <option value="two">TWO</option>
      <option value="three">three</option>
      <option value="four">four</option>
      <option value="six">six</option>
      <option value="none">NONE</option>
    </select>

    // <ol>
    //   {books.map(book => {
    //     console.log('from map')
    //    return <Book key={book.id} name={book.title}/>
    //   })
    //   }
    // </ol>
  );
}

export default App;
