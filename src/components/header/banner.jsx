import React from "react"
import './banner.css';

  class Banner extends React.Component{
    constructor(props){
      super(props)
      this.state= {
        name: "Chez vous, partout et ailleurs"
      }
    }
    render() { 
      return (
        <div className="global-div-banner">
          <div className="IMG-div">
            <p className="backgroundIMG" >{this.state.name}</p>
          </div>
        </div>
      );
    }
  }
  export default Banner;