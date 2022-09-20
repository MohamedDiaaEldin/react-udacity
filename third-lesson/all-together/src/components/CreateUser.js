import  { useState } from 'react';
import '../App.css';



const CreateUser = ({users, setUsers})=>{
    
    const [error, setErrorMessage] = useState('')
    const [user, setUser] =  useState({
        firstName:"",
        lastName:"",
        userName:""
    })

    const handelChange = (event) => {
        const { name, value } = event.target;
        setUser({...user, [name]:value})
    }

    const addUser = (e)=>{        
        e.preventDefault()
        setErrorMessage('')            

        /// check if user if found before 
        let isThere = false
        for (const us of users){
            if (user.userName.trim() === us.userName){
                setErrorMessage('user is found try another user')
                isThere = true
                break;
            }
        }
        // add user if user name not found before 
        if( ! isThere){
            setErrorMessage("")
            setUsers([...users, {...user, games:0}])
        }
        
    }
    
  
    const isDisable = ()=>{
        return !user.firstName || !user.lastName || ! user.userName
    }

    return <form className='create-user' onSubmit={addUser}>
        <p className='error' >{error} </p>
        <input  type="text" onChange={handelChange} name='firstName' placeholder='first name' />
        <input type="text" onChange={handelChange} name='lastName' placeholder='last name' />
        <input type="text" onChange={handelChange} name='userName' placeholder='user name' />
        <button disabled={isDisable()} >Add</button>
        
    </form>
}

export default CreateUser