import "../css/App.css";
import ListContacts from "./ListContacts";
import { useState } from 'react'

const App = () => {

  const [contacts, setContacts] = useState(
    [
      {
        id: "karen",
        name: "Karen Isgrigg",
        handle: "karen_isgrigg",
        avatarURL: "http://localhost:5001/karen.jpg",
      },
      {
        id: "richard",
        name: "Richard Kalehoff",
        handle: "richardkalehoff",
        avatarURL: "http://localhost:5001/richard.jpg",
      },
      {
        id: "tyler",
        name: "Tyler McGinnis",
        handle: "tylermcginnis",
        avatarURL: "http://localhost:5001/tyler.jpg",
      },
    ])

  // setTimeout(() => {
  //   setContacts([{
  //     id: "tyler",
  //     name: "Tyler McGinnis",
  //     handle: "tylermcginnis",
  //     avatarURL: "http://localhost:5001/tyler.jpg",
  //   }])
  // }, 5000)

  return (
    <div>
      <ListContacts contacts={contacts} />
    </div>
  )
};

export default App;
