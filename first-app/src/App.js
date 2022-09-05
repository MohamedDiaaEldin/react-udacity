import logo from './logo.svg';
import './App.css';

const ContactList = (props) => {
  console.log(props)
  const contacts = props.contacts
  return (
    <ol>{contacts.map(contact => <li key={contact.name}>{contact.name}</li>)}</ol>
  )
}


function App() {
  return (
    <div className="App">
      <ContactList contacts={[{ name: 'ali' }, { name: 'hossam' }]} />
      <ContactList contacts={[{ name: 'zaki' }, { name: 'zakria' }]} />
    </div>
  );
}

export default App;
