 import React from "react";
 import "./Boton.css";
 import reloj from "../../imagenes/relojgris.png"

const getBoton=function(titulo,tamaño){
    if(titulo=="Historial de citas"){
        return(
            <button className={tamaño}>{titulo}<img className="i-reloj" src={reloj}></img></button>
        )
    }else{
        return(
            <button className={tamaño}>{titulo}</button>
        )
    }
}

 const Boton = ({titulo,tamaño}) => (
    getBoton(titulo,tamaño)
);
export default Boton;