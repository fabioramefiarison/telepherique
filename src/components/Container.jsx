import React, { useState, useRef } from 'react';
import Dropdown from "./Dropdown";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { isAfter } from 'date-fns';
import { useReactToPrint } from 'react-to-print';
import Ticket from './Ticket';

function Container() {
  const options = ['Anosy', 'Analakely', 'Ankorondrano', 'Analamahitsy', 'Ambatobe'];
  const [selectedOption1, setSelectedOption1] = useState('Anosy');
  const [selectedOption2, setSelectedOption2] = useState('Ambatobe');
  const [selectedDate, setselectedDate] = useState(null);
  const [nombrePers, setnombrePers] = useState("");
  const [message, setMessage] = useState(null);
  const [idTicket, setIdTicket] = useState(1);
  const [btnImprimer, setBtnImprimer] = useState(false)

  const handleOptionSelect1 = (option) => {
    if (option !== selectedOption2) {
      setSelectedOption1(option);
    }
  };

  const handleOptionSelect2 = (option) => {
    if (option !== selectedOption1) {
      setSelectedOption2(option);
    }
  };

  const handleChange = (date) => {
    setselectedDate(date);
  };

  const handleNumberChange = (event) => {
    setnombrePers(event.target.value);
  };

  const handleSubmit = () => {
    const now = new Date();
    if (selectedDate && !isAfter(selectedDate, now)) 
      setMessage("La date sélectionnée doit être dans le futur"); 
    else if (selectedDate == null || nombrePers === 0 || nombrePers === '') 
      setMessage("Champ incomplet !");
    else { 
      setMessage("Réservation faite"); 
      setIdTicket(idTicket + 1);
      setBtnImprimer(!btnImprimer)
    }
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Ticket téléphérique',
    onAfterPrint: () => { console.log("Impression terminée"); }
  });

  return (
    <div id='container-container'>
      <h1><span className='V'>Voyager</span> avec téléphérique <br /><span className='V'>d'ANTANANARIVE</span></h1>
      <div className='container-cont'>
        <section >
          <h3>Trouver votre trajet</h3>
          <ul>
            <li>Ambatobe</li>
            <li>Analamahitsy</li>
            <li>Ankorondrano</li>
            <li>Analakely</li>
            <li>Anosy</li>
          </ul>
        </section>
        <section className='section2'>
          <div>
            <label>DE :</label>
            <Dropdown
              options={options}
              selectedOption={selectedOption2}
              onOptionSelect={handleOptionSelect2}
              defaultOption="Selectionnez ici.."
            />
          </div>
          <div>
            <i className='fas fa-sync'></i>
          </div>
          <div>
            <label>A :</label>
            <Dropdown
              options={options}
              selectedOption={selectedOption1}
              onOptionSelect={handleOptionSelect1}
              defaultOption="Selectionnez ici.."
            />
          </div>
          <div>
            <label>Date de départ :</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeCaption="heure"
              dateFormat="Pp"
              placeholderText='date et heure'
              className='date-voyage'
            />
          </div>
          <div className='vide'>
            <i className='fas fa-sync'></i>
          </div>
          <div>
            <label>passager :</label>
            <div id='passagere'>
              <input 
                type="number" 
                min={1}
                onChange={handleNumberChange}
                value={nombrePers} 
                placeholder='nombre de passagers'
              />
              <i className='fas fa-chevron-circle-down'></i>
            </div>
          </div>
        </section>
        <section>
          <div>
            <input 
              type="button"
              value="Valider mon trajet" 
              id='btn-valider-trajet'
              onClick={handleSubmit}
            />
          </div>
          <span className='alerte'>{message}</span>
        </section>
        <button
        onClick={handlePrint} 
        id='btn-imprimer'
        style={btnImprimer ? {display: 'block'}: {display: 'none'}}>Imprimer</button>
      <Ticket 
        ref={componentRef} 
        idTicket={idTicket}
        selectedDate={selectedDate}
        selectedOption1={selectedOption1}
        selectedOption2={selectedOption2}
        nombrePers={nombrePers}
      />
      </div>

    </div>
  );
}

export default Container;
