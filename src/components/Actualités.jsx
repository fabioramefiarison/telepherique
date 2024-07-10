import React from 'react'
import Carousel from "./CarouselSlick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "./../images/ANR_5814be1f2b (1).jpg"


const lesImages = [
  {image: img1, titre: "Le télépherique séduit ses premiers passagers", paragraphe:"Le premier test avec passagers du télépherique à été effectué hier sur le trajet Anosy-soarano. Les premiers clients de ce transport par câble, parmi lesquels le président de la République, ont été satisfaits de cet essai.", date: "04/06/2024"},
  {image: img1,  titre: "Le télépherique séduit ses premiers passagers", paragraphe:"Le premier test avec passagers du télépherique à été effectué hier sur le trajet Anosy-soarano. Les premiers clients de ce transport par câble, parmi lesquels le président de la République, ont été satisfaits de cet essai.", date: "04/06/2024"},
  {image: img1,  titre: "Le télépherique séduit ses premiers passagers", paragraphe:"Le premier test avec passagers du télépherique à été effectué hier sur le trajet Anosy-soarano. Les premiers clients de ce transport par câble, parmi lesquels le président de la République, ont été satisfaits de cet essai.", date: "04/06/2024"}
]
function Actualités() {
  return (
    <div id='Actualites'>
        <h1>ACTUALITES</h1>
        <h3>N'est pas rater nos informations 24/24 heures</h3>
        <Carousel 
        images={lesImages}/>
    </div>
  )
}

export default Actualités