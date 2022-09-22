import {useState} from  'react'

const CreateUser = ({users, setUsers})=>{
    const [firstName , setFirstName]= useState("")
    const [lastName , setLastName]= useState("")
    const [userName, setUserName]= useState("")


    const addUser = ()=>{        
        console.log('clicked')
        console.log(document.getElementById('first').value)
    }
    const firstHandler = (e)=>{
        setFirstName(e.target.value)
    }

    const addItem = ()=>{
        console.log('adding....')
    }
    return <form onSubmit={addItem}>
        <input onChange={firstHandler}  type="text" id='first' placeholder='first name' />
        <input type="text" placeholder='last name' />
        <input type="text" placeholder='user name' />
        <button >Add</button>
    </form>
}

export default CreateUser