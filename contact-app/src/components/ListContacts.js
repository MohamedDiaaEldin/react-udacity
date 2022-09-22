import PropTypes from 'prop-types';
import { useState } from 'react';

const ListContacts = ({ contacts, onDeleteContact }) => {
    const [query, setQuery] = useState("")
    const showingContacts = query === "" ?
        contacts :
        contacts.filter(contact => contact.name.toLowerCase().includes(query.toLocaleLowerCase()))

    const updateQuery = (e) => {
        setQuery(e.trim())
    }

    const clearQuery = ()=>{
        updateQuery("")
    }

    return (
        <div className='list-contacts'>

            <div className='list-contacts-top'>
                <input type="text" className='search-contacts' placeholder='search contacts' value={query} onChange={(event) => updateQuery(event.target.value)} />
            </div>

            {
                showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>
                            Now showing  {showingContacts.length} of {contacts.length}
                            <button onClick={clearQuery}> Show all</button>
                        </span>
                    </div>
                )
            }

            <ol className="contact-list" >
                {showingContacts.map(contact =>
                    <li className='contact-list-item' key={contact.id}>
                        <div className='contact-avatar'
                            style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}>
                        </div>

                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button onClick={() => onDeleteContact(contact)} className='contact-remove'>remove</button>

                    </li>
                )}
            </ol>
        </div>


    )
}
ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired

}

export default ListContacts; 
