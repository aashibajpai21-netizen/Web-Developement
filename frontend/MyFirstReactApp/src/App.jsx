import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Register from "./Pages/Register";


import {BrowserRouter,R } from "react-router-dom";

import React from "react";

//the function name is same as the file or folder name like in java class has the same name as the file
//page reload is not possible in react


function App() {
  return (
    <>

   
      <Home/>
      <About/>
      <ContactUs/>
      <Login/>
      <Product/>
      <Register/>







      
    </>
  );
}
export default App;
