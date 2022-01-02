import React from "react"
import './about.css';

  const test = [
    {
      "id": "1",
      "title": "Fiabilité",
      "contents": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
      "id": "2",
      "title": "Respect",
      "contents": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      "id": "3",
      "title": "Service",
      "contents": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      "id": "4",
      "title": "Sécurité",
      "contents": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ]

  class About extends React.Component{
    render() { 
      return (
            <section className="global-section-about">
              {test.map(item => (
                <div className="div-details" key={item.id}>
                  <details className="details">
                    <summary className="summary">
                      {item.title}
                      <i className="fas fa-chevron-down" id="chevron"></i>
                    </summary>
                    <p className="contents">{item.contents}</p>
                  </details>
                </div>
              ))}
            </section>
      );
    } 
  }

  export default About;
