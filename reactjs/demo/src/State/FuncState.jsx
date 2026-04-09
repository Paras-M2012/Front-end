// Function : Hooks : Reuse , state mantain 
// useState : react lib 
// react V16.8 Function , hooks 
// vari-type [state,setstate] = useState(value)
// hooks : return outside

import React, { useState } from 'react'
import Imagedata from './Imagedata'

function FuncState() {

    // define,setfunction = value
    const [name, setname] = useState("Paras Panchal")
    const [count, setcount] = useState(0)
    const [isImage, setImage] = useState(true)

    const data = () => {
        setname("Mantra Panchal")
    }
    const count1 = () => {
        setcount(count + 2)
    }
    const count2 = () => {
        setcount(count - 2)
    }
    return (
        <div>
            <h1>Name : {name}</h1>
            <button onClick={data}>Change Name</button>
            <button onClick={() => setname("Shubh")}>Change Name</button>
            <button onClick={() => setname("Dhyana")}>Change Name</button>
            <button onClick={() => setname("Ridhhi")}>Change Name</button>
            <button onClick={() => setname("Siya")}>Change Name</button>

            <h1>Counter : {count}</h1>
            <button onClick={() => setcount(count + 1)}>Increment</button>
            <button onClick={() => setcount(count - 1)}>Decrement</button>
            <button onClick={() => setcount(0)}>Zero</button>
            <button onClick={count1}>increment by 2</button>
            <button onClick={count2}>decrement by 2</button>

            <br /><br /><br />

            <button onClick={()=>setImage(false)}>Hide</button>
            <button onClick={()=>setImage(true)}>Show</button>
            <button onClick={()=>setImage(!isImage)}>Toggle</button>

        {
            isImage ? <Imagedata/> : false
        }
        </div>
    )
}

export default FuncState