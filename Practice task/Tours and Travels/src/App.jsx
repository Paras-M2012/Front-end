import React from 'react'
import Home from './Website/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Website/Pages/About'
import Blog from './Website/Pages/Blog'
import BlogDetails from './Website/Pages/BlogDetails'
import Package from './Website/Pages/Package'
import PackageDetails from './Website/Pages/PackageDetails'
import Service from './Website/Pages/Service'
import Price from './Website/Pages/Price'
import Contact from './Website/Pages/Contact'
import NotFound from './Website/Pages/NotFound'
import Dashboard from './Admin/Apages/Dashboard'
import Packmanage from './Admin/Apages/Packmanage'
import Servicemanage from './Admin/Apages/Servicemanage'
import Packadd from './Admin/Apages/Packadd'
import { Slide, ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
    <div>
       <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/about' element={< About/>}/>
        <Route path='/blog' element={< Blog/>}/>
        <Route path='/blogdetails' element={< BlogDetails/>}/>
        <Route path='/package' element={< Package/>}/>
        <Route path='packagedetails' element={< PackageDetails/>}/>
        <Route path='/services' element={< Service/>}/>
        <Route path='/price' element={< Price/>}/>
        <Route path='/contact' element={< Contact/>}/>
        <Route path='*' element={< NotFound/>}/>
        {/* ADMIN SIDE DETIALS ROUTE */}
        <Route path='/dash' element={< Dashboard/>}/>
        <Route path='/packma' element={< Packmanage/>}/>
        <Route path='/sermanage' element={< Servicemanage/>}/>
        <Route path='/packadd' element={< Packadd/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App