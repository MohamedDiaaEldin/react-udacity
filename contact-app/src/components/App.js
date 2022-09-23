import "../css/App.css";
import ListContacts from "./ListContacts";

import { useState, useEffect } from 'react'
import * as contactsAPI from '../utils/ContactsAPI'

const App = () => {

  // {
  //   id: "tyler",
  //   name: "Tyler McGinnis",
  //   handle: "tylermcginnis",
  //   avatarURL: "http://localhost:5001/tyler.jpg",
  // }
  const [contacts, setContacts] = useState([])
  
  useEffect(()=>{
    const getContacts = async ()=>{
      console.log('from effect')
      const res = await contactsAPI.getAll();
      setContacts(res);
    }
    
    getContacts()

  }, [])

  const removeContact = (contact)=>{
    // remove from database
    contactsAPI.remove(contact)
    // UI change
    setContacts(contacts.filter( c => contact.id !== c.id))

  }

  return (
    <div>
      <ListContacts  onDeleteContact={removeContact} contacts={contacts} />

    </div>
  )
};

export default App;
