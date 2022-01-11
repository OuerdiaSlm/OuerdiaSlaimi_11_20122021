import React from "react"
import './error.css';
import { Link } from "react-router-dom";

  class Error extends React.Component{
    render() { 
      return (
        <div className="global-div-error">
          <h1 className="error">404</h1>
          <h3 className="error-message">Oups! La page que vous demandez n'existe pas.</h3>
          <Link className='menu-link'  to={"/"}>   
              <li className="redirect" >Retourner sur la page d’accueil</li>
          </Link>
        </div>
      );
    }
  }
  export default Error;