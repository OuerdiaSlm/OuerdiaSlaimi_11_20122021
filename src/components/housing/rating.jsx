import React from "react"
import data from '../../data.json';
import starRed from '../../images/star-red.png'
import starGray from '../../images/star-gray.png'

class Rating extends React.Component{
  recoveryId(){
    const param = new URLSearchParams(window.location.search);
    const idLocation = window.location.href.split("/");
    const idLength = idLocation.length;
    const idd = idLocation[idLength-1];
    const test = data.find((data) => data.id === idd);
    return idd
  }

  render() { 
    const appartmentInfos = data.filter( item =>
      item.id === this.recoveryId()
    )
        const rating = appartmentInfos[0].rating
        let stars = []
        const max = 5;

        for(var i = 0 ; i < max ; i++){
             rating > i 
                ? stars.push(<img src={starRed} alt="étoile rouge" className="etoile"/>)
                : stars.push(<img src={starGray} alt="étoile grise" className="etoile"/>)
            }

        return (
            <div className="apartmentHostRating">
                {stars.map((star,index) => {
                    return <span key={`${index}`}>{star}</span> 
                })}
            </div>
        )
    }
}
export default Rating;