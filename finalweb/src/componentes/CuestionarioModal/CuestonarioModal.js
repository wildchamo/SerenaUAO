import React from "react";
import ModalGL from "../Modal/ModalGL";
import "./CuestionarioModal.css"
import TituloModal from "../TituloModal/TituloModal";
import boton from "../../imagenes/volveratrasrojo.png";
import Boton from "../Boton/Boton";

const CuestionarioModal = ({isOpen, closeModal, openmodalCalen}) => {
    const adelante=function(){
        closeModal()
        openmodalCalen()
    }
    return (
        <ModalGL tipo="cuestionario-modal" isOpen={isOpen} closeModal={closeModal}>
            <div >
              <TituloModal titulo=" Agenda tu Cita " imagen={boton} evento={closeModal}></TituloModal>
              <h3 className="cuestionario1">Ayúdanos a conocer más sobre tu problema para conectarte con el psicólogo indicado</h3>
              <h3 className="cuestionario2">¿Haz estado en un espacio de escucha psicológica antes?</h3> 
              <Boton tamaño="botonCuestionario" titulo=" Si " evento={adelante}/>
              <Boton tamaño="botonCuestionario" titulo=" No " evento={adelante}/>
            </div>
        </ModalGL>
    )
}

export default CuestionarioModal