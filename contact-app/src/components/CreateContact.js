
import { Link } from "react-router-dom"
import ImageInput from "./ImageInput"
import "../css/App.css";
import serializeForm from 'form-serialize'
  

const CreateContact = ({onCreateContact})=>{

    const addContactHandler = (e)=>{
        e.preventDefault()
        const values = serializeForm(e.target, {hash:true});
        if (onCreateContact){
            onCreateContact(values)
        }
        console.log('values are ', values)
    }
    return (
      <div>
        <Link className="close-create-contact" to="/" />

        <form onSubmit={addContactHandler} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <div className="create-contact-delails">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="handle" placeholder="handle" />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    );
}

export default  CreateContact