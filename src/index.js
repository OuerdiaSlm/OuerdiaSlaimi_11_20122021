import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Lodging from './pages/lodging';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/lodging/:id" element={<Lodging/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  
  document.getElementById("root")
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
