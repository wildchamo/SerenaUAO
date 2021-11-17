import React from "react";
import "./icon.css";

const Icon=function(props){
    const {source}=props.source;
    return (
        <img className="Icon" src={source}>
    
        </img>  
    )
}

export default Icon;