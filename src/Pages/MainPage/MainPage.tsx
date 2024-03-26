import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Footer from '../../Components/Footer/Footer'
import './MainPage.css'

const MainPage = () => {

 
  

  return (
    <div className='mainPage'>
      <Navbar/>
      <div className='main'>
      <Sidebar/>
      
      </div>
      <Footer/>
    </div>
  )
}

export default MainPage

