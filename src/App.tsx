import React, { useState, useEffect } from "react";
import "./App.css";
import LoginForm from "./Components/Form/LoginForm";
import LoginPage from "./Pages/LoginPage/LoginPage";
import {
  BrowserRouter as Routes,
  Route,
  Router,
  BrowserRouter,
} from "react-router-dom";
import Card from "./Components/Card/Card";
import CardList from "./Components/Card/CardList";
function App() {
  return (
    <div className="d-flex justify-content-center items">
      <LoginPage /> 
    </div>
  );
}

export default App;
