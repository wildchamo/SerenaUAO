import './modal2.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import XBlanca from "../../imagenes/Xfondoblanco.png";
import Fenviar from "../../imagenes/enviar.png";
import Campo  from "../../componentes/Campo/Campo.js";

const Modal2 = ({ handleClose, show, children,data }) => {
  const {texto}=data
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main2">
        {children} 
        <div className="tituloModal">      
        <Link to={texto}>
        <img src={XBlanca} onClick={handleClose}>
        </img>
        </Link>
       <h4> Soporte </h4>
        </div> 

        <div className="Mensajes"> 
        <Campo tamaño="campo-l" tipo="texto" texto="Escribe un mensaje ..."/>
        <img src={Fenviar}></img>
        </div>
      </section>
    </div>
  );
};

export default Modal2;