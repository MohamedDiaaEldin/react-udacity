import {useState} from 'react'

const Form = ()=>{
    const [name, setName] = useState("")
    const handelChange = (e)=>{
        console.log(e.target)
        setName(e.target.value)
    }
    return (
        <form  >
            <input type="text" id='name' value={name} onChange={handelChange}/>
        </form>
    )
}

export default Form