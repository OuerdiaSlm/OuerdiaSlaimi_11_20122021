import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css';
import reportWebVitals from './reportWebVitals';
import Banniere from "./components/banniere/banniere";
import Card from './components/card/card';
import About from './components/about/about';
import Footer from './components/Footer/footer';
import Housing from './components/housing/housing';


ReactDOM.render(
  <React.StrictMode>
   
    <Banniere />
      
    <Router>
      <Routes>
        <Route path="/" element={<Card/>}></Route>
        <Route path="/index" element={<Card/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/housing/:id" element={<Housing/>}></Route>
      </Routes>
    </Router>
    
    <Footer/>
  </React.StrictMode>,

  
  document.getElementById("root")
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
