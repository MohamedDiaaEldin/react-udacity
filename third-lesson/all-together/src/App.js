
import './App.css';
import CreateUser from './components/CreateUser';
import  { useState } from 'react';
import Users from './components/Users';

function App() {
  const [users, setUsers] = useState([])


  return (
    
    <div className="App">      

      <CreateUser users={users} setUsers={setUsers} />

      <Users users={users}/>

    </div>
  );





}

export default App;
