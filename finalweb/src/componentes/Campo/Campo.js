import React from "react";
import "./Campo.css"

const Campo= function({tamaño, texto, tipo}){
    return(
        <input className={tamaño} type={tipo} placeholder={texto}></input>
    )
}

export default Campo