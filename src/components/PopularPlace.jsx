import React from 'react'
import ibis from "./../images/ibis.jpg"
import carlton from "./../images/carlton.jpg"
import gastro from "./../images/gastropizza.jpeg"
import univ from "./../images/Université_d'Antananarivo.jpg"
import ambatobe from "./../images/le-triskel-un-etablissement.jpg"
import pietra from "./../images/gastro-pizza-analakely1.jpg"
import CardPlace from './CardPlace'

function PopularPlace() {
  return (
    <div id='PopularPlace' className="reveal">
      <h1>
      <i className='fas fa-hotel'></i> Hôtel, Restaurant et Lieux
      </h1>
      <h3>Les endroits les plus populaires en ce moment</h3>
        <section>
        <CardPlace 
        img={ibis}
        lieu={"Ankorondrano"}
        nomHotel={"IBIS - hotêl"}
        prix={100000}
        distance={10}
      />
            <CardPlace 
        img={carlton}
        lieu={"Anosy"}
        nomHotel={"Carlton - hotêl"}
        distance={10}
        prix={100000}
      />
            <CardPlace 
        img={gastro}
        lieu={"Analamahitsy"}
        nomHotel={"Gastropizza"}
        distance={10}
        prix={100000}
      />
            <CardPlace 
        img={univ}
        lieu={"Ankatso"}
        nomHotel={"Université d'ANTANANARIVO"}
        distance={10}
        prix={100000}
      />
        
                  <CardPlace 
        img={ambatobe}
        lieu={"Ambatobe"}
        nomHotel={"Le Triskel - Crèperie"}
        distance={10}
        prix={100000}
      />
                        <CardPlace 
        img={pietra}
        lieu={"Analakely"}
        nomHotel={"Pietra - hotêl"}
        distance={10}
        prix={100000}
      />
        </section>
    </div>
  )
}

export default PopularPlace