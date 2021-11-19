import React from "react";
import volver from "../../../imagenes/volveratrasrojo.png";
import "./BotonVolver.css";

const getBotonVolver=function(imagen, evento){  
       return(<img className="i-volver" src={imagen} onClick={evento}></img>)   
}

const BotonVolver = ({imagen, evento}) => (
   getBotonVolver(imagen, evento)
);
export default BotonVolver;