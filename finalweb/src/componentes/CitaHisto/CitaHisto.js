import React from "react";
import Boton from "../Boton/Boton";
import "./CitaHisto.css"
import Detalle from "../Cita/Detalles/Detalles";


const CitaHisto=function({data}){
    const {titulo,hora,fecha}=data

    return(
        <div className="date-card2">
            <h1 className="tituloCitaHisto">{titulo}</h1>
            <Detalle titulo="Hora:" contenido={hora}/>
            <Detalle titulo="Fecha:" contenido={fecha}/>
            <Boton tamaño="botonfit" titulo="Más Información"></Boton>
           
        </div>
    )
}

export default CitaHisto