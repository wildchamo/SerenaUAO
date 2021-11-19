import React from "react";
import ModalGL from "../Modal/ModalGL";
import "./ModalEstado.css"
import Tabla from "../Tabla/Tabla";
import Boton from "../Boton/Boton";
import Detalle from "../Cita/Detalles/Detalles";

const ModalEstado = ({isOpen, closeModal, data}) => {
    const {Psicologo,FechaSol,Estado,PeriodoAc,Mensaje,FyHMsj,Enlace}=data
    return (
        <ModalGL tipo="modal-estado" isOpen={isOpen} closeModal={closeModal}>
            <div className="m-est-cont">
                <h1>Photo</h1>
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
                <Boton tamaño="boton2" titulo="Cancelar cita"/>
            </div>
        </ModalGL>
    )
}

export default ModalEstado