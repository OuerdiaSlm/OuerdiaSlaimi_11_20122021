import React, {Fragment, useState, useEffect} from "react"
import './housing.css';
import data from '../../data.json';

  class Housing extends React.Component{
    constructor(props){
      super(props);
      
    }
    
    recoveryId(){
      const param = new URLSearchParams(window.location.search);
      const vv = window.location.href.split("/");
      const v = vv.length;
      const idd = vv[v-1];
      console.log(idd);
      const test = data.find((data) => data.id === idd);
      console.log(test);
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
                    <p className="housing-title">{item.title}</p>
                    <p className="housing-location">{item.location}</p>
                    <p className="housing-tags">{item.tags+" "}</p>
                  </div>
                ))}

                {dataId.map((item) => (
                  <div className="housing" key={item.id}>
                    <p className="housing-title">{item.host.name}</p>
                    <img src={item.host.picture} className="" alt="" />
                  </div>
                ))}

                {dataId.map(item => (
                  <div className="div-details" key={item.id}>
                    <details className="details">
                      <summary className="summary">
                        Description
                        <i className="fas fa-chevron-down" id="chevron"></i>
                      </summary>
                      <p className="contents">{item.description}</p>
                    </details>
                  </div>
                ))}
              </div>
            </section>
      );
    } 
    
  }

  export default Housing;



  