import './modalU.css';

const ModalU = ({ handleClose, show, children,data }) => {
  const {texto}=data
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main2">
        {children} 
 


      </section>
    </div>
  );
};

export default ModalU;