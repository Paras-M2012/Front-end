import React, { useState } from 'react'
import Imagedata from './Imagedata'

function FuncObj() {

    const [data,setdata] = useState({
        Name : "Rohit Panchal",
        count : 1,
        isImage : true
    })
  return (
    <div>
        <h1>Hello this state data for Object</h1>
        <h1>Name : {data.Name}</h1>
        <button onClick={()=>setdata({...data,Name: "Hiral Panchal"})}>CHANGE NAME</button>
        <button onClick={()=>setdata({...data,Name: "Ridhhi Panchal"})}>CHANGE NAME</button>
        <button onClick={()=>setdata({...data,Name: "Dhyana Panchal"})}>CHANGE NAME</button>
    
        <h1>Count : {data.count}</h1>
        <button onClick={()=>setdata({...data,count:data.count + 1})}>Increment</button>
        <button onClick={()=>setdata({...data,count:data.count - 1})}>Decrement</button>
        <button onClick={()=>setdata({...data,count:0})}>Zero</button>
    
        <br /><br /><br />
        <button onClick={()=>setdata({...data,isImage:data.isImage })}>HIDE</button>
        <button onClick={()=>setdata({...data,isImage:data.isImage})}>SHOW</button>
        {/* <button onClick={()=>setdata({...data,isImage:})}>Toggle</button> */}
        
        {
            isImage ? <Imagedata/> : false   
        }

    </div>
  )
}

export default FuncObj