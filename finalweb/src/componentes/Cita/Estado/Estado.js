import React from "react";
import "./Estado.css";
import pre from "../../../imagenes/citaPA.png"
import apro from "../../../imagenes/citaA.png"

const getStateIcon=function(estado){
    if(estado=="Aprobada"){
        return(
            <img className="i-date" src={apro}></img>
        )
    }

    if(estado=="Preaprobada"){
        return(
            <img className="i-date" src={pre}></img>
        )
    }
}

const Estado=function({estado}){
    return(
        <div className="state-container">
            <h2 className={estado}>{estado}</h2>
            {getStateIcon(estado)}
        </div>
    )
}

export default Estado