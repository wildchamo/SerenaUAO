 import React from "react";
 import "./Boton.css";

 const Boton = ({titulo,tamaño}) => (
    
    <button className={tamaño}>{titulo}</button>
);
export default Boton;