import React, {Fragment, useState, useEffect} from "react"
import './card.css';
import data from '../../data.json';
import { Link } from "react-router-dom";


  class Card extends React.Component{

    handleClick= id => {
      alert("click COVER");
      const dataHouse = data
      const index = dataHouse.findIndex(function(dataHouse){
        return dataHouse.id === id
      })

    }
    render() { 
      return (
            <section className="global-section-card">
              <div className="global-card">
                {data.map((item, id) => (
                  <div className="card" key={id}>
                    <Link className='housing-link'  to={`/housing/${item.id}`}>
                      <img src={item.cover} className="card-cover" alt="" />
                    </Link>
                    <p className="card-title">{item.title}</p>
                  </div>
                ))}
              </div>
            </section>
      );
    } 
    
  }

  export default Card;



  