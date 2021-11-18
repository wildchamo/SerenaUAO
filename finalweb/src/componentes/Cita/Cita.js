import React from "react";
import Boton from "../Boton/Boton";
import "./Cita.css"
import Detalle from "./Detalles/Detalles";
import State from "./Estado/Estado";
import ModalGL from "../../componentes/Modal/ModalGL";
import useModal from "../../hooks/useModal";
import modalEstado from "../modalEstado/ModalEstado";


const Cita=function({data, evento}){
    const {Psicologo,FechaSol,Estado}=data

    //const [evento]=useModal(false);
    return(
        <div className="date-card">
            <State estado={Estado}/>
            <Detalle titulo="Psicólogo:" contenido={Psicologo}/>
            <Detalle titulo="Fecha:" contenido={FechaSol}/>
            <h2 className="more-date" onClick={evento}>Más información</h2>
            <Boton tamaño="botonfit" titulo="Ir a la reunión"/>
        </div>
    )
}

export default Cita