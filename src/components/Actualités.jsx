import React from 'react'
import { useTranslation } from "react-i18next";
import Carousel from "./CarouselSlick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "./../images/ANR_5814be1f2b (1).jpg"
import img2 from "./../images/CABLE.jpg"
import video1 from "./../vidéo/TRANSPORT PAR CABLE - Début des tests de cabine de téléphérique avant le lancement officiel.mp4"


function Actualités() {
  const [t, i18n] = useTranslation("global");
  const lesImages = [
    {image: img1, titre: t('Actualites.actus1Titre'), paragraphe: t("Actualites.actus1Paragraphe")},
    {video: video1,  titre: t("Actualites.actus2Titre"), paragraphe: t("Actualites.actus2Paragraphe")},
    {image: img2,  titre: t("Actualites.actus3Titre"), paragraphe: t("Actualites.actus3Paragraphe"), date: "04/06/2024"}
  ]

  return (
    <div id='Actualites' className="reveal">
        <h1>{t("Actualites.h1")}</h1>
        <h3>{t("Actualites.h2")}</h3>
        <Carousel 
        images={lesImages}/>
    </div>
  )
}

export default Actualités