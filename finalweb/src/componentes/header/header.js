import React from "react";
import "./header.css";
import logoHeader from "../../imagenes/logoserena.png"
import HeaderInfo from "./headerInfo/headerinfo.js"

const Header = function () {
  return (
    <header className="headerr">
        <img src={logoHeader}/> 

        <HeaderInfo/>
    </header>

  );
};

export default Header;