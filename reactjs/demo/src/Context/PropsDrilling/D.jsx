import React from 'react'

function D({name,setname}) {
  return (
    <div>
      <h1>D Compoenent</h1>
      <h1>D : {name}</h1>
      <button onClick={()=>setname("MANTRA PANCHAL")}>Change name</button>
    </div>
  )
}

export default D