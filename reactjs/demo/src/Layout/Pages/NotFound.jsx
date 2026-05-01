import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {

    const redirect = useNavigate()

    const backto =()=>{
        redirect("/")
        
    }
  return (
    <div>
        <h1 className='bg-danger text-light text-center p-5'>404 Page not found something different</h1>
        <Link to="/" className='btn btn-success'>Back to home</Link>
        <button onClick={backto} className='btn btn-primary'>BACK TO THE HOME</button>
    </div>
  )
}

export default NotFound