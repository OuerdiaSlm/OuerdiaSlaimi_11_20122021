import React from "react"
import './banner.css';
import IMG from '../../images/IMG.jpg';
  class Banner extends React.Component{
    constructor(props){
      super(props)
      this.state= {
        name: "Chez vous, partout et ailleurs",
        imgSrc : IMG
      }
    
    }
    render() { 
      return (
        <div className="global-div-banner">
            <div className="IMG-div">
              {/* <img src={this.state.imgSrc} alt="" className="IMG" /> */}
              <p className="backgroundIMG" >{this.state.name}</p>
            </div>
        </div>
      );
    }
  }
  export default Banner;