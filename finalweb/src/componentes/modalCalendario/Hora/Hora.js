import React from "react";
import "./Hora.css"

const Hora=function({hora, evento}){
    return(
        <div className="marco-hora" onClick={evento}>
            <h2 className="texto-hora">{hora}</h2>
        </div>
    )
}

export default Hora