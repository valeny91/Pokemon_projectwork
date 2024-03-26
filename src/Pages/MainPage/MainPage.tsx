
import CardList from "../../Components/Card/CardList";
import Card from "../../Components/Card/Card";
import "./MainPage.css";
import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Footer from '../../Components/Footer/Footer'

const MainPage = () => {




  return (
    <div>

      <div className='mainPage'>
        <Navbar />
        <div className='main'>
          <Sidebar />
          <CardList />
          <Card
            pokemon={{
              images: {
                small: "",
                large: "",
              },
              id: 0,
              name: "",
            }}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
