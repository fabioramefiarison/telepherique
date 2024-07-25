import React from 'react'

function Contact() {
  return (
    <div id='contact'>    
<h1>Contact</h1>
<p>Pour les remarque et commentaire</p>

<div class="container">
  <form action="">
    <div class="row">
      <div class="col-25">
        <label for="fname">Prenom :</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="votre prénom.." required/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">E-mail :</label>
      </div>
      <div class="col-75">
        <input type="email" id="lname" name="lastname" placeholder="votre @email.." required/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="country">Type :</label>
      </div>
      <div class="col-75">
        <select id="country" name="country">
          <option value="australia" class="option" >Commentaire</option>
          <option value="canada" class="option" >Remarque</option>
          <option value="usa" class="option" >Autre</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subject">Motif :</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Ecrire quelque chose.." ></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Envoyer"/>
    </div>
  </form>
</div>
    </div>
  )
}

export default Contact