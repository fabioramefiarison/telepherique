import React from 'react'
import Carousel from "./CarouselSlick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "./../images/ANR_5814be1f2b (1).jpg"
import img2 from "./../images/CABLE.jpg"
import video1 from "./../vidéo/TRANSPORT PAR CABLE - Début des tests de cabine de téléphérique avant le lancement officiel.mp4"

const lesImages = [
  {image: img1, titre: "Antananarivo accueillera bientôt sa première ligne de téléphérique", paragraphe:"Les deux premières stations du réseau desservant Antananarivo sont désormais achevées. La première station, située près du lac Anosy au bas du centre-ville, est prête, tout comme la seconde, implantée sur la ville haute à proximité de la place du 13 mai. Il ne reste plus qu’à les relier par les câbles pour permettre les essais du premier tronçon.Ce téléphérique facilitera le trajet entre ces deux points de la capitale en quelques minutes seulement, offrant une alternative aux rues pavées, tortueuses et souvent encombrées. Cependant, malgré les avancées, de nombreux pylônes manquent encore sur le reste du chantier. Par ailleurs, les résidents de la capitale demeurent dans l’attente des tarifs qui seront mis en place. Une autre préoccupation concerne la fourniture électrique, souvent instable à Antananarivo. Si cette situation ne s’améliore pas, les passagers pourraient se retrouver bloqués pendant des heures dans les cabines suspendues.", date: "04/06/2024"},
  {video: video1,  titre: "Le télépherique séduit ses premiers passagers", paragraphe:"Le premier test avec passagers du télépherique à été effectué hier sur le trajet Anosy-soarano. Les premiers clients de ce transport par câble, parmi lesquels le président de la République, ont été satisfaits de cet essai.", date: "04/06/2024"},
  {image: img2,  titre: "Téléphérique : Trois cabines en phase de test", paragraphe:"Le projet téléphérique entame la dernière phase avant le lancement officiel de l’exploitation de la ligne reliant Anosy et Soarano, prévu le 26 juin 2024.Il s’agit du test des cabines sur les câbles. Trois cabines vides ont ainsi été lancées par le Secrétariat d’Etat en charge des Nouvelles Villes et de l’Habitat, mercredi dernier à Anosy. Elles vont effectuer des allers-retours sur cet axe pendant quelques jours, et ce, avec une vitesse moyenne de 4 mètres par seconde afin d’assurer toutes les vérifications techniques surtout les éventuelles défaillances ainsi que les derniers réglages, a-t-on appris.", date: "04/06/2024"}
]
function Actualités() {
  return (
    <div id='Actualites' className="reveal">
        <h1>ACTUALITES</h1>
        <h3>N'est pas rater nos informations 24/24 heures</h3>
        <Carousel 
        images={lesImages}/>
    </div>
  )
}

export default Actualités