import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import drapeau from "../images/drapeau_MLG.png"

function Header() {
   const [t, i18n] = useTranslation("global");
   const [elements, setElements] = useState([t("header.li1"), t("header.li2"), t("header.li3"), t("header.li4")])
   const [elementSelectionner, setElementSelectionner] = useState(t("header.li1"))
   const [visibility, setVisibility] = useState(false);
   const [showMenu, setShowMenu] = useState(false)
   const [ulDisplay, setUlDisplay] = useState(false);


   const handleSwitchLang = (lang) => {
      i18n.changeLanguage(lang);
   }
   const handleSwitchMgFr = () => {
      setVisibility(!visibility)
   }
  /*useEffect(() => {
      const handleScreen = () => {
         setIsSmallScreen(window.innerWidth >= 800)
      }
      window.addEventListener("resize", handleScreen)

      return () => window.addEventListener("resize", handleScreen)
   })*/
const handleClickListe = (element) => {
   setElementSelectionner(element)
   /*if (elementSelectionner.includes(element)) {
      setElementSelectionner(elementSelectionner.filter((i) => i !== element))
   }
   else{
      setElementSelectionner([...elementSelectionner, element])
   }*/
}
const handleClickMenu = () => {
   setShowMenu(!showMenu)
   setUlDisplay(!ulDisplay)
}
const handleClose = () => {
   setUlDisplay(false)
}

  return (
   <>
      <div id="container-header">
         <nav className="logo">
            <img src={drapeau} alt="drapeau Malagasy" 
            style={{marginRight: '5px'}}/>
            <span>Télepherique</span>
         </nav>
         <nav>
            <ul className={ulDisplay ? "ul-display" : ""}>
               {
                  elements.map((element) => (
                     <li key={element}
                     style={{backgroundColor: element === elementSelectionner ? '#ffb703' : ""}}
                     onClick={() => handleClickListe(element)}>
                      {element}
                   </li>
                  ))
               }
            </ul>
         </nav>
         <nav id="chearch-bar"
        className={ulDisplay ? "searchResp" : ""}>
            <input type="search" placeholder="rechercher"/>
            <i className="fas fa-search"></i>
         </nav>
         <nav className="switch-lang">
            <i className="fas fa-globe"
            style={{marginRight:'2px'}}
            onClick={handleSwitchMgFr}></i>
            <span>{t("header.language")}</span>
            <div className="les-lang" 
            style={visibility ? {display: 'block'} : {display: 'none'}}>
               <input type="button"
                value="FR"
                onClick={() => {handleSwitchLang('fr')
                  setVisibility(false)
                }}
                />
               <input type="button" 
                value="MG"
                onClick={() => {handleSwitchLang('mg')
                setVisibility(false)
                }}
                />
            </div>
         </nav>
         <nav className="les-btn">
            <input type="button" value={t('header.btnInscrire')} />
            <input type="button" value={t('header.btnConnecter')}  />
         </nav>
         <nav>
            <i className="fas fa-bars" 
            onClick={handleClickMenu}></i>
         </nav>
         <nav
          onClick={handleClose}
          className={ulDisplay ? "closeDisplay": ""}>
            <i className="fas fa-close"></i>
         </nav>
      </div>
   </>
  )
}

export default Header