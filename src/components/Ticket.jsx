import React from "react";

const Ticket = React.forwardRef((props, ref) => {
   return (
     <div id='ticket' ref={ref}>
       <section>
         <i className='fas fa-tram'></i>
       </section>
       <section>
         <h1>TICKET DE TELEPHERIQUE</h1>
         <div>
           <span><strong>n°: </strong>{props.idTicket}</span>
           <span><strong>date: </strong>{props.selectedDate ? props.selectedDate.toLocaleDateString() : ""}</span>
           <span><strong>heure: </strong>{props.selectedDate ? props.selectedTime :""}</span>
         </div>
         <div className='parent-cabine-vers-de'>
           <div className='cabine-vers-de'>
             <span><strong>cabine</strong></span>
             <span>120</span>
           </div>
           <div className='cabine-vers-de'>
             <span><strong>DE</strong></span>
             <span>{props.selectedOption1}</span>
           </div>
           <div className='cabine-vers-de'>
             <span><strong>VERS</strong></span>
             <span>{props.selectedOption2}</span>
           </div>
         </div>
         <div>
           <span><strong>nombre de personne:</strong></span>
           <span>{props.nombrePers}</span>
         </div>
       </section>
       <section>
         {/* Section vide */}
       </section>
     </div>
   );
 });

 export default Ticket;