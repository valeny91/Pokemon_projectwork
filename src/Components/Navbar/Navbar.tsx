import React, { FC } from 'react';
import Cart from '../Cart/Cart';
import './Navbar.css'



const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-warning p-3">
                <div className="container-fluid">
                <div className='logo'>
                            <img  className='logofooter' src="https://cdn-icons-png.flaticon.com/128/361/361998.png" alt="" />
                        </div>

                    <a className="navbar-brand" href="#">Pokemon Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacts</a>
                            </li>
                            
                        </ul>
                        <Cart/>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
