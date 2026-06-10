import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import { BrowserRouter,Routes, Route } from "react-router-dom"; 
const App = () => {
  return(
    <>
      <div className="bg-primary">App</div>
      <BrowserRouter>
      <Header/>
      <Footer/>
      <Routes>
        <route>
          <Link to={"  / "}>Home</Link>
          <Link to={" /  "}>ContactUs</Link>
          <Link to={" / "}>Product</Link>
          <Link to={" / "}>Register</Link>
          <Link to={" / "}>About</Link>
                 
        </route>
      </Routes>
      </BrowserRouter>
       
    </>

  );
}
export default App;


