import React from "react";
import "./Titulo.css";

const Titulo=function({texto}){
    return(
        <h1 className="titulo">{texto}</h1>
    )
}

export default Titulo