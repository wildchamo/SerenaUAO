import React, { Component } from "react";
import "./botonSoporte.css";
import Soporte from "../../imagenes/soporte.png";
import Modal2 from "./modal2.js";

class BotonSoporte extends Component {
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
        <div>
    <img className="botonSoporte" src={Soporte} onClick={this.showModal}></img>
  
        <Modal2 data={"restablecer"} show={this.state.show} handleClose={this.hideModal}>
          <div>
              Soporte
          </div>


        </Modal2>
      </div>
    );
  }

}

export default BotonSoporte;
