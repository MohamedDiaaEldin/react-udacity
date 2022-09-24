import "../css/App.css";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import { useState, useEffect } from 'react'

import { Routes, Route, useNavigate } from "react-router-dom";

import * as contactsAPI from '../utils/ContactsAPI'

const App = () => {
  let nagivate = useNavigate()

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

 const onCreateContact = (contact) =>{
  const create = async()=>{
    const res = await contactsAPI.create(contact) 
    setContacts(contacts.concat(res))

  }
  create()
  nagivate('/')
 }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ListContacts onDeleteContact={removeContact} contacts={contacts} />
        }
      />

      <Route
        path="/create"
        element={<CreateContact onCreateContact={onCreateContact} />}
      />
    </Routes>
  );
};

export default App;
