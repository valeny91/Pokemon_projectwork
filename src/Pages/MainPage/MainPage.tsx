
import CardList from "../../Components/Card/CardList";
import Card from "../../Components/Card/Card";
import "./MainPage.css";
import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Footer from '../../Components/Footer/Footer'
import ProductPage from "../ProductPage/ProductPage";
import CartDrawer from "../../Components/CartDrawer/CartDrawer";

const MainPage = () => {
  return (
    <div>
      <div className='mainPage'>
        <Navbar />
        <div className='main'>
          <Sidebar/>
        <ProductPage/>
       
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
