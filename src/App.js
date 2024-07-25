import React from "react";
import "./style.scss";
import styled from "styled-components"
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
    return (
        <Div id="all">
          <Baniere/>
          <PopularPlace/>
          <Actualités/>
          <Contact/>
        </Div>
    )
}

export default App;