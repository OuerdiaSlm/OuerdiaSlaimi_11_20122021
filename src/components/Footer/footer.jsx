import React from "react"
import './footer.css';
import footerLogo from '../../images/footerLogo.png';



  class Footer extends React.Component{

    render() { 
      return (
            <footer className="footer">
              <div className="global-footer">
                <img src={footerLogo} className="footer-logo" alt="" />
                <p className="footer-content">© 2020 Kasa. All rights reserved</p>
              </div>
            </footer>
      );
    } 
    
  }


  export default Footer;
  