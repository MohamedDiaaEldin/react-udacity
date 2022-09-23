
import { useEffect, useState } from "react"

const TestEffect  = ()=>{
    const [value, setValue] = useState(0)
    useEffect(()=>{
        console.log('hello from effect')
    }, [])
    
const buttonHandler = ()=>{
    setValue(value + ' hello there')
}
return <div>
    <p>{value}</p>
    <button onClick={buttonHandler}>click me</button>
</div>
}

export default TestEffect
