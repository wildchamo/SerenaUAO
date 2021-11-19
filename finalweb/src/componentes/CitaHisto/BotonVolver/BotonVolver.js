import React from "react";
import volver from "../../../imagenes/volveratrasrojo.png";
import "./BotonVolver.css";

const getBotonVolver=function(imagen, evento){  
       return(<button className="b-volver" onClick={evento}><img className="i-volver" src={imagen}></img></button>)   
}

const BotonVolver = ({imagen, evento}) => (
   getBotonVolver(imagen, evento)
);
export default BotonVolver;