import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import drapeau from "../images/drapeau_MLG.png";
import ScrollReveal from "scrollreveal";

function Header() {
  const [t, i18n] = useTranslation("global");
  const [elements, setElements] = useState([
    { id: "container-baniere", label: t("header.li1") },
    { id: "PopularPlace", label: t("header.li2") },
    { id: "Actualites", label: t("header.li3") },
    { id: "contact", label: t("header.li4") },
  ]);
  const [elementSelectionner, setElementSelectionner] = useState("container-baniere");
  const [visibility, setVisibility] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [ulDisplay, setUlDisplay] = useState(false);

  useEffect(() => {
    setElements([
      { id: "container-baniere", label: t("header.li1") },
      { id: "PopularPlace", label: t("header.li2") },
      { id: "Actualites", label: t("header.li3") },
      { id: "contact", label: t("header.li4") },
    ]);
    setElementSelectionner("container-baniere");
  }, [i18n.language, t]);

  const handleSwitchLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleSwitchMgFr = () => {
    setVisibility(!visibility);
  };

  const handleClickListe = (id) => {
    setElementSelectionner(id);
    setUlDisplay(false);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickMenu = () => {
    setShowMenu(!showMenu);
    setUlDisplay(!ulDisplay);
  };

  const handleClose = () => {
    setUlDisplay(false);
  };

  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      delay: 500,
      distance: "50px",
      opacity: 0,
      easing: "ease-in-out",
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div id="container-header">
        <nav className="logo">
          <img src={drapeau} alt="drapeau Malagasy" style={{ marginRight: '5px' }} />
          <span>{t("header.txtLogo")}</span>
        </nav>
        <nav>
          <ul className={ulDisplay ? "ul-display" : ""}>
            {elements.map((element) => (
              <li
                key={element.id}
                style={{ backgroundColor: element.id === elementSelectionner ? '#ffb703' : "" }}
                onClick={() => handleClickListe(element.id)}
              >
                {element.label}
              </li>
            ))}
          </ul>
        </nav>
        <nav id="chearch-bar" className={ulDisplay ? "searchResp" : ""}>
          <input type="search" placeholder={t("header.searchBar")} />
          <i className="fas fa-search"></i>
        </nav>
        <nav className="switch-lang">
          <i className="fas fa-globe" style={{ marginRight: '2px' }} onClick={handleSwitchMgFr}></i>
          <span>{t("header.language")}</span>
          <div className="les-lang" style={visibility ? { display: 'block' } : { display: 'none' }}>
            <input type="button" value="FR" onClick={() => { handleSwitchLang('fr'); setVisibility(false); }} />
            <input type="button" value="MG" onClick={() => { handleSwitchLang('mg'); setVisibility(false); }} />
          </div>
        </nav>
        <nav className="les-btn">
          <input type="button" value={t('header.btnInscrire')} />
          <input type="button" value={t('header.btnConnecter')} />
        </nav>
        <nav>
          <i className="fas fa-bars" style={ulDisplay ? { display: 'none' } : { display: "block" }} onClick={handleClickMenu}></i>
        </nav>
        <nav onClick={handleClose} className={ulDisplay ? "closeDisplay" : ""}>
          <i className="fas fa-close"></i>
        </nav>
      </div>
    </>
  );
}

export default Header;
