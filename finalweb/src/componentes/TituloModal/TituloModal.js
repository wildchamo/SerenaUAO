import React from "react";
import "./TituloModal.css";
import BotonVolver from "../CitaHisto/BotonVolver/BotonVolver";

const TituloModal= function({titulo,imagen}){
    return(
       <div className="tituloModal">
           <BotonVolver imagen={imagen} />
           <h2 className="tituloModal-t">{titulo}</h2>
       </div>
        )
}
export default TituloModal;