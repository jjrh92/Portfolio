import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Pages/Navbar/Navbar";
import About from "./components/Pages/About/About";
import Projects from "./components/Pages/Projects/Projects";
import Contact from "./components/Pages/Contact/Contact";
import FourOFour from "./components/Pages/FourOFour/FourOFour";
import Footer from "./components/Pages/Footer/Footer";
import "./reset.css";

function App() {

  return (


    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/about" element={<><About/></>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<FourOFour/>} />
    </Routes>      
    <Footer /> 
  </BrowserRouter>





  )
}

export default App
