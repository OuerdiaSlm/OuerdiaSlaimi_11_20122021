import React from "react"
import './about.css';
import aboutIMG from '../../images/aboutIMG.png';
import Collapse from "../../components/collapse/collapse";

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

class AboutC extends React.Component{
  render() {
    return (
      <section className="global-section-about">
        <div className="all-components-without-footer">
          <img src={aboutIMG} className="about-banner" alt="banner about"/>
          <div className="global-div-about"> 
              {test.map(item => (
                <Collapse key={`${item.title}`} title={item.title} contents={item.contents} />
              ))}
            </div>
        </div>
      </section>
    )
  }
}
export default AboutC;