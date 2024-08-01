import React from 'react';
import { useTranslation } from "react-i18next";

function Contact({ id }) {
  const [t, i18n] = useTranslation("global");

  return (
    <div id={id} className='reveal'>
      <h1>{t("Contact.h1")}</h1>
      <p>{t("Contact.h2")}</p>
      <div className="container">
        <form action="">
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">{t("Contact.firstname")} :</label>
            </div>
            <div className="col-75">
              <input type="text" id="fname" name="firstname" placeholder={t("Contact.placeholderFirstName")} required />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">{t("Contact.Mail")} :</label>
            </div>
            <div className="col-75">
              <input type="email" id="lname" name="lastname" placeholder={t("Contact.placeholderMail")} required />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="country">{t("Contact.Type.commentary")} :</label>
            </div>
            <div className="col-75">
              <select id="country" name="country">
                <option value="australia" className="option">{t("Contact.Type.commentary")}</option>
                <option value="canada" className="option">{t("Contact.Type.remarque")}</option>
                <option value="usa" className="option">{t("Contact.Type.other")}</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">{t("Contact.motif")} :</label>
            </div>
            <div className="col-75">
              <textarea id="subject" name="subject" placeholder={t("Contact.placeholderMotif")}></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value={t("Contact.btnEnvoyer")} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
