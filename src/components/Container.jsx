import React, { useState , useRef} from 'react'
import Dropdown from "./Dropdown"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.module.css"
import { isAfter } from 'date-fns';
import ReactToPrint from 'react-to-print';

function Container() {
  const options = ['Anosy', 'Analakely', 'Ankorondrano', 'Analamahitsy', 'Ambatobe'];
  const [selectedOption1, setSelectedOption1] = useState('Anosy');
  const [selectedOption2, setSelectedOption2] = useState('Ambatobe');
  const [selectedDate, setselectedDate] = useState(null)
  const [nombrePers, setnombrePers] = useState("")
  const [message, setMessage] = useState(null)
  const [idTicket, setIdTicket] = useState(1)

  const handleOptionSelect1 = (option) => {
      if (option !== selectedOption2) {
          setSelectedOption1(option);
      }
  };

  const handleOptionSelect2 = (option) => {
      if (option !== selectedOption1) {
          setSelectedOption2(option);
      }}

  const handleChange = (date) => {
        setselectedDate(date)
    }

    const handleNumberChange = (event) => {
      setnombrePers(event.target.value)
    }

  const handleSubmit = () => {
    const now = new Date()
       if (selectedDate && !isAfter(selectedDate, now)) 
        setMessage("la doit sélectionnée doit être dans le futur")     
          else if (selectedDate == null || nombrePers === 0 || nombrePers === '') 
            setMessage("Champ incomplète !")
          else { 
            setMessage("Réservation fait") 
            setIdTicket(idTicket + 1)
          }
  }


    const componentRef = useRef()
    const handlePrint = () => {
      componentRef.current.print()
    }


  return (
    <div id='container-container'>
      <h1><span className='V'>Voyager</span> avec télepherique <br /><span className='V'>d'ANTANANARIVE</span></h1>
        <div className='container-cont'>
          <section >
          <h3>trouver votre trajet</h3>
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
              <label >DE :</label>
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
                <label for="date-voyage">Date de départ :</label>
                <DatePicker
                selected={selectedDate}
                onChange={handleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeCaption={15}
                dateFormat="Pp"
                placeholderText='date et heure'
                className='date-voyage'/>
            </div>
            <div className='vide'>
              <i className='fas fa-sync'></i>
            </div>
            <div>
              <label htmlFor="passagere">passagère :</label>
              <div id='passagere'>
                <input 
                type="number" 
                min={1}
                onChange={handleNumberChange}
                value={nombrePers} 
                placeholder='nombre de passagère'/>
                <i className='fas fa-chevron-circle-down'></i>
              </div>
            </div>
          </section>
          <section>
            <div>
              <input 
              type="button"
              value="valider mon trajet" 
              id='btn-valider-trajet'
              onClick={handleSubmit}/>
            </div>
            <span className='alerte'>{message}</span>
          </section>
        </div>
        <ReactToPrint
          trigger={() => {

            return <button onClick={handlePrint}>Imprimmer</button>
          }}
            content = {() => componentRef.current}
            documentTitle='Ticket télepherique'
            pageStyle="impression"
            onAfterPrint={() => {console.log("dff")}}

        >
        {({handlePrint}) => (
          <div id='ticket' ref={componentRef}>
          <section>
            <i className='fas fa-tram'></i>
          </section>
          <section>
            <h1>TICKET DE TELEPHERIQUE</h1>
            <div>
              <span><strong>n°: </strong>{idTicket}</span>
              <span><strong>date: </strong>{selectedDate ? selectedDate.toLocaleDateString() : ""}</span>
              <span><strong>heure: </strong>{selectedDate ? selectedDate.toLocaleTimeString() : ""}</span>
            </div>
            <div className='parent-cabine-vers-de'>
              <div className='cabine-vers-de'>
                <span><strong>cabine</strong></span>
                <span>120</span>
              </div>
              <div className='cabine-vers-de'>
                <span><strong>DE</strong></span>
                <span>{selectedOption1}</span>
              </div>
              <div className='cabine-vers-de'>
                 <span><strong>VERS</strong></span>
                 <span>{selectedOption2}</span>
              </div>
            </div>
            <div>
              <span><strong>nombre de personne:</strong></span>
              <span>{nombrePers}</span>
            </div>
          </section>
          <section>

          </section>
      </div>
        )}
        </ReactToPrint>
    </div>
  )
}

export default Container