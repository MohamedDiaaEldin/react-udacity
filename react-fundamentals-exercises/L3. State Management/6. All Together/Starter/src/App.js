import logo from "./logo.svg";
import "./App.css";
import CreateUser from "./components/createUser";
import { useState } from "react";


const App = () => {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>

      <CreateUser users={users} setUsers={setUsers} />
      

    </div>
  );
};

export default App;
