import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Banniere from "./components/banniere/banniere";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './components/Footer/footer';


ReactDOM.render(
  <React.StrictMode>
   
    <Banniere />
      
    <Router>
      <Routes>
        
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
