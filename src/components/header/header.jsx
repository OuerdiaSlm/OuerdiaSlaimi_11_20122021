import React from "react"
import './header.css';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

  class Header extends React.Component{
  
    constructor(props){
      super(props)
      
    }
    
    handleClick(){
    
    }

    render() { 
      return (
        <div className="global-div-header">
          <header className="App-header">
            <div className="Barre-navigation">
              <img src={logo} className="logo" alt="" />
              <ul className="Barre-text">  
                <Link className='menu-link'  to={"/"}>   
                  <li className="test" >Accueil</li>
                </Link>
                <Link className='menu-link'  to={"about"}>
                   <li >A Propos</li>
                </Link>
              </ul>
            </div>
            
          </header>
        </div>
      );
    }
  }

  export default Header;