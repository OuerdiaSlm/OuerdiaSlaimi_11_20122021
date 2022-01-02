import React from "react"
import './banniere.css';
import logo from '../../images/logo.svg';
import IMG from '../../images/IMG.jpg';
  class Banniere extends React.Component{
    
    handleClick(){
      alert("click fait");
    }

    render() { 
      return (
        <div className="global-div-banner">
          <header className="App-header">
            <div className="Barre-navigation">
              <img src={logo} className="logo" alt="" />
              <ul className="Barre-text">    
                <a href="/index" >  
                  <li className="test" onClick={this.handleClick}>Accueil</li>
                </a>
                <a href="/about">
                   <li >A Propos</li>
                </a>
              </ul>
            </div>
            <div className="IMG-div">
              <img src={IMG} className="IMG" alt="" />
              <p className="backgroundIMG">Chez vous, partout et ailleurs</p>
            </div>
          </header>
        </div>
      );
    }
  }

  export default Banniere;