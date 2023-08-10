import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Pages/Navbar/Navbar";
import Landing from "./components/Pages/Landing/Landing";
import About from "./components/Pages/About/About";
import Projects from "./components/Pages/Projects/Projects";
import Contact from "./components/Pages/Contact/Contact";
import Footer from "./components/Pages/Footer/Footer";
import { usePleaseStay } from 'react-use-please-stay'
import { Analytics } from '@vercel/analytics/react';
import "./reset.css";

function App() {

  usePleaseStay({

    titles: [

      "Julio Reyes | Web Developer",
      "Welcome to my Portfolio",
      "jjrh92.dev",

    ],

    interval: 2000,
    animationType: Animation.LOOP,

    faviconURIs: [


      "https://img.icons8.com/color/96/javascript--v1.png",
      "https://img.icons8.com/external-others-inmotus-design/67/external-Code-programming-others-inmotus-design-2.png",
      "https://img.icons8.com/officel/80/react.png",

    ],

    alwaysRunAnimations: true

  })

  return (

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/about" element={<><About/></>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>      
    <Footer /> 
  </BrowserRouter>

  )
}

export default App
