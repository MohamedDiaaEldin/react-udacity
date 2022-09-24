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
  


  return (
    <ol>
      {books.map(book => {
        console.log('from map')
       return <Book key={book.id} name={book.title}/>
      })
      }
    </ol>
  );
}

export default App;
