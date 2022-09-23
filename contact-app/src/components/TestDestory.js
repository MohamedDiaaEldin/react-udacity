import {useState, useEffect} from 'react'
const TestDestory = ()=>{

    const [value, setValue] = useState(0)
    
    useEffect(()=>{
        console.log('from effect')
        setValue('2000')

        return ()=>{
            console.log('from rutern')
        }
    }, [])

    // setTimeout(()=>{
    //     setValue(value  + 10)
    // }, 1000)
    return <div>
        <h1>{value}</h1>
    </div>
}

export default TestDestory
