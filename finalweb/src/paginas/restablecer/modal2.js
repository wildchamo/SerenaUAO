import './modal2.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Modal2 = ({ handleClose, show, children,data }) => {
  const {texto}=data
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main2">
        {children}       
        <Link to={texto}>
        <button type="button" onClick={handleClose}>
          Aceptar
        </button>
        </Link> 
      </section>
    </div>
  );
};

export default Modal2;