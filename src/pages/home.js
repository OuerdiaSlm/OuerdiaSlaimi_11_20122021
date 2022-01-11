import React from "react"
import Banner from "../components/header/banner";
import Card from "../components/card/card";
import Header from "../components/header/header";
import Footer from "../components/Footer/footer";

class Home extends React.Component{
  render() {
    return (
      <section className="wagi">
        <div className="all-components-without-footer">
          <Banner/>
          <Card/>
        </div>
        <Footer/>
        
      </section>
    )
  }
}

export default Home;