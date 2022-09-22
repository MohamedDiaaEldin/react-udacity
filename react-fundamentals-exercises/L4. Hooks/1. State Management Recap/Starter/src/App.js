import logo from "./logo.svg";
import "./App.css";
import Chat from "./components/Chat";
import {useState} from 'react'

const users = [{ username: "Amy" }, { username: "John" }];

//   { username: "Amy", text: "Hi, Jon!" },
// { username: "Amy", text: "How are you?" },
// { username: "John", text: "Hi, Amy! Good, you?" },

const App = () => {
  const [messages, setMessages] = useState([]);
  
  
  const addMessage = (message, user)=>{  
    setMessages([...messages, {username:user, text:message}])

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">

        {
          users.map(user => <Chat key={user.username} user={user} users={users} messages={messages} addMessage={addMessage}/>)
        }


      </div>

    </div>
  );
};

export default App;
