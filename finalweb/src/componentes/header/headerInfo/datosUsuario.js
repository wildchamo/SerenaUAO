import React, { Component } from "react";
import "./datosUsuario.css";
import Elipse from "../../../imagenes/ellipse.png";
import Flecha from "../../../imagenes/flechaheader.png";
import ModalU from "./modalU.js";

class DatosUsuario extends Component {
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
      
        <div >
         <div className="datosU" onClick={this.showModal}>
          <p>Nombre Usuario</p>
          <img src={Elipse} className="elipse"></img>
          <img src={Flecha} className="flecha"></img>
         </div>
      

        <ModalU show={this.state.show} handleClose={this.hideModal}>
        </ModalU>
      </div>
    );
  }
}

export default DatosUsuario;
