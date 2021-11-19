import React from "react";
import Boton from "../../Boton/Boton";
import "./Detalles.css"


const getMeet=function(titulo,contenido){
    if(titulo=="Enlace"){
        return(
            <a href={contenido} className="boton">Ir a la reunión</a>
        )
    }else{
        return(
            <h2 className="detail-content">{contenido}</h2>
        )
    }
}

const Detalle=function({titulo,contenido}){
    return(
        <div className="detail-container">
            <h2 className="detail-title">{titulo}</h2>
            {getMeet(titulo,contenido)}
        </div>
    )
}

export default Detalle