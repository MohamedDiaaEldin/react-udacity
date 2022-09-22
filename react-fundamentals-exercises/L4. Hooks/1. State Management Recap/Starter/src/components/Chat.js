
import {useState} from 'react'

const Chat = ({user, users, messages, addMessage})=>{

    const [message, setMessage] = useState('')
    

    const isDisabled = () => {
      return message === "";
    };

    const sendHandler = (e)=>{
        e.preventDefault()
        addMessage(message, user.username)
        setMessage('')
    }
    const typeHandler = (e)=>{
        setMessage(e.target.value)        
    }


    
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        {/*  message history could be another component */}
        <ul className="message-list">
          {messages.map((message, index) => {
            return (
            <li
              key={index}
              className={
                message.username === user.username
                  ? "message sender"
                  : "message recipient"
              }
            >
              <p>{`${message.username}: ${message.text}`}</p>
            </li>)
          })}
        </ul>

        <div>
          <form className="input-group">
            <input
              type="text"
              value={message}
              className="form-control"
              placeholder="Enter your message..."
              onChange={typeHandler}
            />

            <div className="input-group-append">
              <button
                onClick={sendHandler}
                className="btn submit-button"
                disabled={isDisabled()}
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Chat