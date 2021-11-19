import './modal.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <Link to="/">
        <button type="button" onClick={handleClose}>
          Aceptar
        </button>
        </Link> 
      </section>
    </div>
  );
};

export default Modal;