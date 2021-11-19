import React from "react";
import ModalGL from "../Modal/ModalGL";
import "./ModalEstado.css"
import Tabla from "../Tabla/Tabla";
import Boton from "../Boton/Boton";
import Detalle from "../Cita/Detalles/Detalles";
import BtnClose from "../../imagenes/XfondoRojo.png"
import TituloModal from "../TituloModal/TituloModal";

const ModalEstado = ({isOpen, closeModal, openModalCancel,data}) => {
    const {Psicologo,FechaSol,Estado,PeriodoAc,Mensaje,FyHMsj,Enlace}=data
    const opandclo=function(){//Función para abrir el siguiente modal y cerrar el anterior
        closeModal()
        openModalCancel()
    }
    return (
        <ModalGL tipo="modal-estado" isOpen={isOpen} closeModal={closeModal}>
            <div className="m-est-cont">
                <TituloModal evento={closeModal} titulo="Estado de su cita" imagen={BtnClose}/>
                <div className="m-est-details">
                    <Detalle titulo="Periodo académico" contenido={PeriodoAc}/>
                    <Detalle titulo="Estado" contenido={Estado}/>
                    <Detalle titulo="Fecha solicitud" contenido={FechaSol}/>
                    <Detalle titulo="Psicólogo" contenido={Psicologo}/>
                    <Detalle titulo="Enlace" contenido={Enlace}/>
                </div>
                <div>
                    <h2 className="m-est-t">Seguimiento a su cita</h2>
                    <Tabla fecha={FyHMsj} mensaje={Mensaje}/>
                </div>
                <Boton tamaño="boton2" titulo="Cancelar cita" evento={opandclo}/>
            </div>
        </ModalGL>
    )
}

export default ModalEstado