import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='logo'>
          <img className='logofooter' src="https://cdn-icons-png.flaticon.com/128/361/361998.png" alt="" />
        </div>
        <div className='creditsfooter'>
          <p>Vincenzo, Stefania e Valentina Inc.</p>
        </div>
        <div className='iconsfooter'>
          <a className='linkedin' href="#">
            <i className="ri-linkedin-fill"></i>
          </a>
          <a className='facebook' href="#">
            <i className="ri-facebook-fill"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer

