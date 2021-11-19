import './modalH.css';
import Notification from "../../Notificacion/Notificacion.js"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const ModalH = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <Notification/>
        <button type="button" onClick={handleClose}>
          Aceptar
        </button>
      </section>
    </div>
  );
};

export default ModalH;