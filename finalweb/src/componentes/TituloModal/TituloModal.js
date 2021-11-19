import React from "react";
import "./TituloModal.css";
import BotonVolver from "../CitaHisto/BotonVolver/BotonVolver";

const TituloModal= function({titulo,imagen,evento}){
    return(
       <div className="tituloModal">
           <BotonVolver imagen={imagen} evento={evento}/>
           <h2 className="tituloModalTexto">{titulo}</h2>
       </div>
        )
}
export default TituloModal;