import React from "react"
import './card.css';
import data from '../../data.json';
import { Link } from "react-router-dom";

  class Card extends React.Component{
    render() { 
      return (
        <section >
          <div className="global-section-card">
            <div className="global-card">
              {data.map((item, id) => (
                <div className="card" key={id}>
                  <Link className='housing-link'  to={`/lodging/${item.id}`}>
                    <img src={item.cover} className="card-cover" alt="" />
                  </Link>
                  <p className="card-title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    } 
  }
  export default Card;



  