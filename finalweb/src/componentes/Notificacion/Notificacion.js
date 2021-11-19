
import React from "react";
import "./Notificacion.css";
import TituloModal from "../TituloModal/TituloModal";
import boton from "../../imagenes/XfondoRojo.png";

const Notificacion = function () {
  return (<div className="notificacion">
         <TituloModal titulo=" Notificaciones " imagen={boton} ></TituloModal>
        <div className="notificacionesCont">
            <h3 className="textoNotif"> No tienes notificaciones </h3>
        </div>
        

       
   
        </div>
  );
};

export default Notificacion;