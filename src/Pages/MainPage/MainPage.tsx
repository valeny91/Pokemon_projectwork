import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './MainPage.css'

const MainPage = () => {
  return (
    <div className='mainPage'>
      <Navbar/>
      <div className='main'></div>
      <Footer/>
    </div>
  )
}

export default MainPage

