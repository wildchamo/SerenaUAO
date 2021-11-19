import React, { Component } from "react";
import "./headerinfo.css";
import ModalH from "./modalh.js";

import Campana from "../../../imagenes/notificaciones.png";

class HeaderInfo extends Component {
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
      <div className="headerInfo">
        <img src={Campana} onClick={this.showModal}>
        </img>

        <ModalH show={this.state.show} handleClose={this.hideModal}></ModalH>
      </div>
    );
  }
}
export default HeaderInfo;
