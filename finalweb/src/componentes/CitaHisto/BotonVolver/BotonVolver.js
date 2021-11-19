import React from "react";
import volver from "../../../imagenes/volveratrasrojo.png";
import "./BotonVolver.css";

const getBotonVolver=function({imagen}){  
       return(<button className="b-volver"><img className="i-volver" src={imagen}></img></button>)   
}

const BotonVolver = (imagen) => (
   getBotonVolver(imagen)
);
export default BotonVolver;