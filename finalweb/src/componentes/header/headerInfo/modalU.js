import './modalU.css';
import ModalLogin from "../../modalLogin/modalLogin.js";
const ModalU = ({ handleClose, show, children,data }) => {
  const {texto}=data
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-mainU">
        {children} 
    <ModalLogin/>


      </section>
    </div>
  );
};

export default ModalU;