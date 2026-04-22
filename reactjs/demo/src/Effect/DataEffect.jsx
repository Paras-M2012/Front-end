// effect : function side effect 
// Api calll , theme , load
// callback , api data call , ematy , [],[state]

import React, { useEffect, useState } from 'react'

function DataEffect() {
    const [name,setname] = useState("Paras Panchal")

    // 1) Empty data store
    // useEffect(()=>{
    //     console.log("effect outside")
    //     return(()=>{
    //         console.log("effect inside")
    //     })
    // },)

    // 2) [] Blank Array
    // useEffect(()=>{
    //     console.log("effect outside")
    //     return(()=>{
    //         console.log("effect inside")
    //     })
    // },[])

    // 3) State Pass but always in array[state]
    useEffect(()=>{
        console.log("effect outside")
        return(()=>{
            console.log("effect inside")
        })
    },[name])

  return (
    <div>
    <h1>Hello this is usereffect call</h1>
    <h1>Name : {name}</h1>
    <button onClick={()=>setname("MANTRA PANCHAL")}>Change Name</button>
    </div>
  )
}

export default DataEffect