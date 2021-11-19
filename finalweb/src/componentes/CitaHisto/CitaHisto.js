import React from "react";
import Boton from "../Boton/Boton";
import "./CitaHisto.css"
import Detalle from "../Cita/Detalles/Detalles";
//import CuestionarioModal from "../CuestionarioModal/CuestonarioModal";


const CitaHisto=function({data, evento}){
    const {Citaid,hora,FechaSol}=data

    return(
        <div className="date-card2">
            <h1 className="tituloCitaHisto"> Cita{Citaid}</h1>
            <Detalle titulo="Hora:" contenido={hora}/>
            <Detalle titulo="Fecha:" contenido={FechaSol}/>
            <Boton tamaño="botonfit" titulo="Más Información" evento={evento} ></Boton>           
        </div>
    )
}

export default CitaHisto