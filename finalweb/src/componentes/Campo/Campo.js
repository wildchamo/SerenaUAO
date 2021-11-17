import React from "react";
import "./Campo.css"

const Campo= function({tamaño, texto}){
    return(
        <input className={tamaño} type="text" placeholder={texto}></input>
    )
}

export default Campo