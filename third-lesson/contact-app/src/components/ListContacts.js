import PropTypes from 'prop-types';

const ListContacts = ({ contacts , onDeleteContact}) => {
  

    return (
        <ol className="contact-list" >
            {contacts.map(contact =>
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
                    <button onClick={ ()=>onDeleteContact({contact}) }  className='contact-remove'>remove</button>
                    
                </li>
            )}
        </ol>
    )
}
ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
    
}

export default ListContacts; 
