import React from "react"
import './pagesStyle.css';
import Footer from "../components/Footer/footer";
import AboutC from "../components/about/about";

class About extends React.Component{
  render() {
    return (
      <section className="global-section">
        <AboutC/>
        <Footer/>
      </section>
    )
  }
}
export default About;