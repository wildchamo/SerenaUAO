import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Boton from "../../componentes/Boton/Boton";
import Campo from "../../componentes/Campo/Campo";
import Modal from "./modal.js";
import Headerr from "../../componentes/headerr/headerr.js";
import "./restablecer.css";

class Restablecer extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div className="restablecer">
        <Headerr />
        <div className="restablecerTexto">
          <h2>Restablecer contraseña</h2>
          <p>
            Para restablecer su contraseña, envíe su nombre de usuario o su
            dirección de correo electrónico , le enviaremos un email con
            instrucciones para poder acceder de nuevo.
          </p>
          <p>Ingresa tu correo o nombre de usuario</p>
          <Campo tamaño="campo-s" tipo="texto" />

          {/* <Link to="/">
                        <Boton tamaño="boton1" titulo="Enviar"></Boton>
                    </Link> */}
          {/* <Boton tamaño="boton1" titulo="Enviar" onClick={this.showModal}></Boton> */}
          <button tamaño="boton1" onClick={this.showModal}>
            Enviar
          </button>
        </div>

        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h2>Correo enviado con éxito</h2>
          <p className="parrafoModal">
            Se ha enviado un email para que puedas restablecer tu contraseña con
            éxito.
          </p>
          <br/>
          <p>Contiene instrucciones sencillas para confirmar y completar el cambio de contraseña. </p>
        </Modal>
      </div>
    );
  }
}
export default Restablecer;
