import "./modalU.css";
import ModalLogin from "../../modalLogin/modalLogin.js";
const ModalU = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-mainU">
        {children}
        <ModalLogin/>

        <button type="button" className="botonIn" onClick={handleClose}>
          Aceptar
        </button>
      </section>
    </div>
  );
};

export default ModalU;
