import { useState } from "react"

function CardPlace(props) {
  const [isLike, setIsLike] = useState(false)
  const handleLike = () => {
    setIsLike(!isLike)
  }
  return (
    <div id='colums-card'>
         <i className='fas fa-heart'
            onClick={handleLike}
            style={isLike ? {color: 'red'} : {}}></i>
         <img src={props.img} alt="photo de l'hotêl" />
         <h2><i className='fas fa-map-marker-alt'></i> {props.lieu}</h2>
         <h3><i className='fas fa-hotel'></i> {props.nomHotel}</h3>
         <p>à peine: {props.distance} mètres</p>
         <a href="#">CONSULTER</a>
         <p style={{textAlign: 'right'}}>A partir de  <span style={{fontStyle: 'italic', color: '#d62828'}}>{props.prix}</span> AR</p>
    </div>
  )
}

export default CardPlace