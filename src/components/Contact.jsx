import React from 'react'
import { useTranslation } from "react-i18next";

function Contact() {
  const [t, i18n] = useTranslation("global");

  return (
    <div id='contact' className='reveal'>    
<h1>{t("Contact.h1")}</h1>
<p>{t("Contact.h2")}</p>

<div class="container">
  <form action="">
    <div class="row">
      <div class="col-25">
        <label for="fname">{t("Contact.firstname")} :</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder={t("Contact.placeholderFirstName")} required/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">{t("Contact.Mail")} :</label>
      </div>
      <div class="col-75">
        <input type="email" id="lname" name="lastname" placeholder={t("Contact.placeholderMail")} required/>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="country">{t("Contact.Type.commentary")} :</label>
      </div>
      <div class="col-75">
        <select id="country" name="country">
          <option value="australia" class="option" >{t("Contact.Type.commentary")}</option>
          <option value="canada" class="option" >{t("Contact.Type.remarque")}</option>
          <option value="usa" class="option" >{t("Contact.Type.other")}</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subject">{t("Contact.motif")} :</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder={t("Contact.placeholderMotif")} ></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value={t("Contact.btnEnvoyer")}/>
    </div>
  </form>
</div>
    </div>
  )
}

export default Contact