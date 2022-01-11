import React from "react"
import Carrousel from "../components/carrousel/carrousel";
import Footer from "../components/Footer/footer";
import Housing from "../components/housing/housing";
import HousingDetail from "../components/housing/housingDetail";
import Tags from "../components/housing/tags";

class Lodging extends React.Component{
  render() { 
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