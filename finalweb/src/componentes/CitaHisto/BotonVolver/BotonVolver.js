import React from "react";
import volver from "../../../imagenes/volveratrasrojo.png"
import "./BotonVolver.css";

const getBoton=function(){  
       return(<button className="b-volver"><img className="i-volver" src={volver}></img></button>)   
}

const Boton = () => (
   getBoton()
);
export default Boton;