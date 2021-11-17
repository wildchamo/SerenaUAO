import React from "react";
import "./Tabla.css"

const Tabla=function({fecha,mensaje}){
    return(
        <div className="wrapper">
            <table>
                <tr className="t-head">
                    <th className="t-h-fecha">Fecha</th>
                    <th>Mensaje</th>
                </tr>
                <tr className="t-body">
                    <th className="t-b-text">{fecha}</th>
                    <th className="t-b-text t-b-t-left">{mensaje}</th>
                </tr>
            </table>
        </div>
        
    );
}

export default Tabla;