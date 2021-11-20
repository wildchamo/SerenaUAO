import React from "react";
import "./ModalLogin.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BotonModalLogin from "../botonModalLogin/botonModalLogin.js";
import icon1 from "../../imagenes/relojrojo.png";
import icon2 from "../../imagenes/logout.png";

const ModalLogin = function () {
  return (
    <section className="modalLogin">
      <Link to="/historial">
        <BotonModalLogin data={{ logo: icon1, texto: "Historial" }} />
      </Link>
      <Link to="/">
        <BotonModalLogin data={{ logo: icon2, texto: "Cerrar sesión" }} />
      </Link>
    </section>
  );
};

export default ModalLogin;
