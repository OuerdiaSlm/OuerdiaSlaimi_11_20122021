import React from "react"
import data from '../../data.json';

  class Tags extends React.Component{
    constructor(props){
      super(props);
    }
    
    recoveryId(){
      // const param = new URLSearchParams(window.location.search);
      const idLocation = window.location.href.split("/");
      const idLength = idLocation.length;
      const idd = idLocation[idLength-1];
      // const test = data.find((data) => data.id === idd);
      return idd
    }

    render() { 
      const dataId = data.filter( item =>
        item.id === this.recoveryId()
      )
      return (
            <section className="global-section-tags">
                

                {dataId[0].tags.map((tag)=>{
                    return(
                      <h3 className="housing-tags" key={tag}>{tag}</h3>
                         
                    )
                })}

            </section>

            
      );
    } 
  }
  export default Tags;



  