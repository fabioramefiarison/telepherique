import { useState } from "react"
import { useTranslation } from "react-i18next";

function CardPlace(props) {
  const [t, i18n] = useTranslation("global");
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
         <p> {t("HotelRestaurant.distanceTxt1")}{props.distance} {t("HotelRestaurant.distanceTxt2")}</p>
         <a href="#">{t("HotelRestaurant.btnConsulter")}</a>
         <p style={{textAlign: 'right'}}>{t("HotelRestaurant.prix")}  <span style={{fontStyle: 'italic', color: '#d62828'}}>{props.prix}</span> AR</p>
    </div>
  )
}

export default CardPlace