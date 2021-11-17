import React from "react";
import "./Detalles.css"

const Detalle=function({titulo,contenido}){
    return(
        <div className="detail-container">
            <h2 className="detail-title">{titulo}</h2>
            <h2 className="detail-content">{contenido}</h2>
        </div>
    )
}

export default Detalle