import React from "react"
import './carrousel.css';
import data from '../../data.json';
import arrow from '../../images/arrow.png'; 

  class Carrousel extends React.Component{
    constructor(props) {
      super(props);
      this.props= props;
      this.state = {
          arrayIndex: 0,
      };
      this.plusSlide = this.plusSlide.bind(this);
      this.lessSlide = this.lessSlide.bind(this);

      //Récupèration de l'Id
      const idLocation = window.location.href.split("/");
      const idLength = idLocation.length;
      const idd = idLocation[idLength-1];

      const appartmentInfos = data.filter( item =>
        item.id === idd
      ) 
      this.appartmentInfos = appartmentInfos
  } 

    plusSlide(){
      this.appartmentInfos[0].pictures.map((image) =>{
      
      this.state.arrayIndex >= this.appartmentInfos[0].pictures.length -1 
      ? this.setState({ arrayIndex: 0 })
      : this.setState({ arrayIndex: this.state.arrayIndex + 1 })
      })
    }
    lessSlide(){
        this.state.arrayIndex === 0
            ? this.setState({ arrayIndex: this.appartmentInfos[0].pictures.length - 1})
            : this.setState({ arrayIndex: this.state.arrayIndex - 1 })
    }

    render() { 
      return (
            <section className="global-section-carrousel">
                {this.appartmentInfos[0].pictures.map((image, index) =>{
                 
                    return(
                      <div className="testkan" key={image}>
                        {
                          this.state.arrayIndex === index ?
                          <img src={image} alt="" className="carrousel-Img" />
                          : ""
                        }
                 
                      {this.appartmentInfos[0].pictures.length > 1 ? 
                        <div>
                            <img className="carouselArrowLeft" onClick={this.lessSlide} src={arrow} alt="arrow"/>
                            <img className="carouselArrowRight" onClick={this.plusSlide} src={arrow} alt="arrow"/>    
                          </div> 
                        : ""
                        }
                        <p className='carouselCounter'>
                          {this.state.arrayIndex + 1}/{this.appartmentInfos[0].pictures.length}
                        </p>
                      </div>
                    )
                    })}
            </section>
      );
    } 
  }
  export default Carrousel;



  