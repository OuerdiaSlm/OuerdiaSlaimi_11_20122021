import React, {Fragment, useState, useEffect} from "react"
import './housing.css';
import data from '../../data.json';

  class HousingDetail extends React.Component{
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
            <section className="global-section-housingDetail">
              <div className="global-housing">
                {dataId.map(item => (
                  <div className="div-details" key={item.id}>
                    <details className="details">
                      <summary className="summary">
                        {item.title}
                        <i className="fas fa-chevron-down" id="chevron"></i>
                      </summary>
                      <p className="contents">{item.equipments}</p>
                    </details>
                  </div>
                ))}

              </div>
            </section>
      );
    } 
    
  }

  export default HousingDetail;



  