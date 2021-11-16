 import React from "react";
 import "./Boton.css";

 const Boton = ({titulo,tamaño}) => (
    <div> 
    <button className={tamaño}>{titulo}</button>     
    </div>
);
export default Boton;