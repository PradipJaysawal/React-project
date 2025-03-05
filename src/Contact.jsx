import React from 'react'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const Contact = () => {
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <h1 className="text-center font-bold text-2xl mt-2">Contact Us</h1>
        <Footer/>
    </div>
  )
}

export default Contact
