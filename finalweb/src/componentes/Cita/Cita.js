import React from "react";
import Boton from "../Boton/Boton";
import "./Cita.css"
import Detalle from "./Detalles/Detalles";
import State from "./Estado/Estado";


const Cita=function({data}){
    const {Psicologo,FechaSol,Estado}=data

    return(
        <div className="date-card">
            <State estado={Estado}/>
            <Detalle titulo="Psicólogo:" contenido={Psicologo}/>
            <Detalle titulo="Fecha:" contenido={FechaSol}/>
            <h2 className="more-date">Más información</h2>
            <Boton tamaño="botonfit" titulo="Ir a la reunión"/>
        </div>
    )
}

export default Cita