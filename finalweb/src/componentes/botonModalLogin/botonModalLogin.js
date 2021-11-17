import React from "react";
import "./botonModalLogin.css";

const botonModalLogin=function(props){
    const {logo, texto}=props.data;
    return (
        <div className="botonModalLogin">
            
        <img classNme="iconM" src={logo}/>  
        <p>{texto}</p>
        </div>
            
    )
}

export default botonModalLogin;