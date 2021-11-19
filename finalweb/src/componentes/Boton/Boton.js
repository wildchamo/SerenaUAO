 import React from "react";
 import "./Boton.css";
 import reloj from "../../imagenes/relojgris.png"

const getBoton=function(titulo,tamaño,evento){
    if(titulo=="Historial de citas"){
        return(
            <button className={tamaño}>{titulo}<img className="i-reloj" src={reloj}></img></button>
        )
    }else{
        return(
            <button className={tamaño} onClick={evento}>{titulo}</button>
        )
    }
}

 const Boton = ({titulo,tamaño,evento}) => (
    getBoton(titulo,tamaño,evento)
);
export default Boton;