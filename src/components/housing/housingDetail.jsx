import React from "react"
import './housing.css';
import data from '../../data.json';
import Collapse from "../collapse/collapse";

  class HousingDetail extends React.Component{
    constructor(props){
      super(props);
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
        <div className="global-housingDetail">
          {/* {console.log(dataId)} */}
            {dataId.map(item => (
              // <div className="div-housing-details" key={item.id}>
              //   <details className="housing-details">
              //     <summary className="summary">
              //       Description
              //       <i className="fas fa-chevron-down" id="chevron"></i>
              //     </summary>
              //     <p className="description">{item.description}</p>
              //   </details>
              // </div>
              <Collapse key={`${item.title}`} title="Description" contents={item.description} />
            ))}

            {dataId.map(item => (
              <div className="div-housing-details" key={item.id}>
                <details className="housing-details">
                  <summary className="summary">
                  Équipements
                    <i className="fas fa-chevron-down" id="chevron"></i>
                  </summary>
                  <div className="contents-equipment">
                    {dataId[0].equipments.map((equipment)=>{
                      return(
                        <p className="equipment" key={equipment}>{equipment}</p>
                      )
                    })}
                  </div>
                </details>
              </div>
            ))}

        </div>
      );
    } 
  }
  export default HousingDetail;



  