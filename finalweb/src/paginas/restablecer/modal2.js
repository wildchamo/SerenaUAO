import './modal2.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import XBlanca from "../../imagenes/Xfondoblanco.png";

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
      </section>
    </div>
  );
};

export default Modal2;