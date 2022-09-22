import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ListItems from "./Componenets/ListItems"; 
import DeleteItem from "./Componenets/DeleteItem";

const App = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([])

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    setItems([...items, value]);
    setValue("");
  };


  const inputIsEmpty = () => value === "";

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>

      <h2>Shopping List</h2>

      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={handleChange}
        />
        <button disabled={inputIsEmpty()}>Add</button>

        
      </form>



      <DeleteItem items={items} setItems={setItems} />

      <p className="items">Items</p>

      <ListItems items={items} />

    </div>
  );
};

export default App;
