import React from "react";
import "./style.scss";
import Baniere from "./components/Baniere";
import styled from "styled-components"
import font from "./font/georgia.ttf";
import "./font awesome/all.min.css"


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
        <Div >
          <Baniere/>
        </Div>
    )
}

export default App;