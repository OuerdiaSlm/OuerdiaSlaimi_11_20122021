import React from "react"
import Carrousel from "../components/carrousel/carrousel";
import Footer from "../components/Footer/footer";
import Housing from "../components/housing/housing";
import HousingDetail from "../components/housing/housingDetail";
import Tags from "../components/housing/tags";
import data from '../data.json';


class Lodging extends React.Component{
  recoveryId(){
    const param = new URLSearchParams(window.location.search);
    console.log(param);
    const idLocation = window.location.href.split("/");
    console.log(idLocation);
    const idLength = idLocation.length;
    console.log(idLength)
    const idd = idLocation[idLength-1];
    console.log(idd)
    const test = data.find((data) => data.id === idd);
    console.log(test);
    return idd
  }
  render() { 
    const dataId = data.filter( item =>
      item.id === this.recoveryId()
    )
    console.log(dataId.id);
      console.log(this.idd);
      console.log(dataId)
      return (
        <section >
          <div className="all-components-without-footer">
            <Carrousel/>
            <Housing/>
            <Tags/>
            <HousingDetail/>
          </div>
          <Footer/>
        </section>
    )
  }
}
export default Lodging;