import React from "react";
import "./ModalLogin.css";
import BotonModalLogin from "../botonModalLogin/botonModalLogin.js";
import icon1 from "../../imagenes/relojrojo.png";
import icon2 from "../../imagenes/logout.png";

const ModalLogin= function(){
    return(
        <section className="modalLogin">
       <BotonModalLogin data={{logo:icon1 ,texto: "Historial" }}/>
       <BotonModalLogin data={{logo:icon2 ,texto: "Cerrar sesión"}}/>
        </section>
        )
}

export default ModalLogin;