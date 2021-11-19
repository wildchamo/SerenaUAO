import React from "react";
import ModalGL from "../Modal/ModalGL";
import "./CuestionarioModal.css"
import TituloModal from "../TituloModal/TituloModal";
import boton from "../../imagenes/volveratrasrojo.png";
import Boton from "../Boton/Boton";

const CuestionarioModal = ({isOpen, closeModal, data}) => {
    const {}=data
    return (
        <ModalGL tipo="cuestionario-modal" isOpen={isOpen} closeModal={closeModal}>
            <div >
              <TituloModal titulo=" Agenda tu Cita " imagen={boton}></TituloModal>
              <h3>Ayúdanos a conocer más sobre tu problema para conectarte con el psicólogo indicado</h3>
              <h3>¿Haz estado en un espacio de escucha psicológica antes?</h3> 
              <Boton tamaño="botonCuestionario" titulo=" Si "/>
              <Boton tamaño="botonCuestionario" titulo=" No "/>
            </div>
        </ModalGL>
    )
}

export default CuestionarioModal