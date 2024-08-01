import React, { useEffect, useState } from "react";
import "./style.scss";
import styled from "styled-components"
import ReactLoading from "react-loading"
import font from "./font/framd.ttf";
import "./font awesome/all.min.css"
import Baniere from "./components/Baniere";
import PopularPlace from "./components/PopularPlace";
import Actualités from "./components/Actualités";
import Contact from "./components/Contact";

const Div = styled.div`
  color: #deeaee;
  font-family: font;

@font-face {
  font-family: font;
  src: url("${font}");
}
`
function App() {
  const [loading, setLoading] = useState(true)

  useEffect( ()=> {
    const timer = setTimeout( ()=> {
      setLoading(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])
    return (
        <Div id="all">
          {loading ? 
            (<Div className="chargement">
              <ReactLoading type="bars" color="yellow" height={100} width={100}/>
            </Div>)
          : (
            <Div id="all">
              <Baniere id="container-baniere"/>
              <PopularPlace id="PopularPlace"/>
              <Actualités id="Actualites"/>
              <Contact id="contact"/>
            </Div>
          )}
        </Div>
    )
}

export default App;