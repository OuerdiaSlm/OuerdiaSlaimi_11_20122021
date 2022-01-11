import React from "react"
import './housing.css';
import data from '../../data.json';
import Rating from "./rating";

  class Housing extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        error: null,
      }
    }
    
    recoveryId(){
      const param = new URLSearchParams(window.location.search);
      const idLocation = window.location.href.split("/");
      const idLength = idLocation.length;
      const idd = idLocation[idLength-1];
      const test = data.find((data) => data.id === idd);
      return idd
    }
    
    render() { 
      const dataId = data.filter( item =>
        item.id === this.recoveryId()
      )
      
      
      return (
            <section className="global-section-housing">
              <div className="global-housing">
                {dataId.map((item) => (
                  <div className="housing" key={item.id}>
                    
                    <h1 className="housing-title">{item.title}</h1>
                    <h2 className="housing-location">{item.location}</h2>
                  </div>
                ))}
                <div className="name-rating">
                  {dataId.map((item) => (
                  <div className="host-picture-name" key={item.id}>
                    <h3 className="host-name">{item.host.name}</h3>
                    <img src={item.host.picture} className="host-picture" alt="" />
                  </div>
                ))}
                <Rating/>
                </div>
              </div>
            </section>
      );
      
    } 
    
  }

  export default Housing;



  