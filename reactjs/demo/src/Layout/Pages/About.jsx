import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
        <Header/>
        <h1 className='p-4 bg-success'>HELLO WORLD</h1>
        <h2 className='p-2 bg-success'>CLICK AND KNOW ABOUT THE NARODA ORTHOPEDIC HOSPITAL</h2>
            <Link to="abouthospital" className='btn btn-info'>ABOUT HOSPITAL</Link>
            <Link to="aboutteam" className='btn btn-primary'>ABOUT TEAM</Link>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default About