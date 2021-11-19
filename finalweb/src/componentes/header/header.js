import React from "react";
import "./header.css";
import logoHeader from "../../imagenes/logoserena.png"
import HeaderInfo from "./headerInfo/headerinfo.js"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Header = function () {
  return (
    <header className="headerr">
      <Link to="/Home">
        <img src={logoHeader}/> 
      </Link>
       <HeaderInfo/>
    </header>

  );
};

export default Header;