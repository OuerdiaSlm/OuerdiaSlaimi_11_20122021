import React from "react"
import Carrousel from "../components/carrousel/carrousel";
import Footer from "../components/Footer/footer";
import Housing from "../components/housing/housing";
import HousingDetail from "../components/housing/housingDetail";
import Tags from "../components/housing/tags";
import data from '../data.json';
import NotFound from "./notFound";

class Lodging extends React.Component{
  constructor(props) {
    super(props);
    //Récupèration de l'Id
    const idLocation = window.location.href.split("/");
    const idLength = idLocation.length;
    const idd = idLocation[idLength-1];

    const appartmentInfos = data.filter( item =>
      item.id === idd
    ) 
    this.appartmentInfos = appartmentInfos;
} 
  render() { 
    if(this.appartmentInfos.length === 0){
      return (
        <NotFound/>
      )
    }
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