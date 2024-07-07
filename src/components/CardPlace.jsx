import React from 'react'

function CardPlace(props) {
  return (
    <div id='colums-card'>
         <img src={props.img} alt="photo de l'hotêl" />
         <h2><i className='fas fa-map-marker-alt'></i> {props.lieu}</h2>
         <h3><i className='fas fa-hotel'></i> {props.nomHotel}</h3>
         <p>à peine: {props.distance} mètres</p>
         <p style={{textAlign: 'right'}}>A partir de  <span style={{fontStyle: 'italic', color: '#d62828'}}>{props.prix}</span> AR</p>
    </div>
  )
}

export default CardPlace