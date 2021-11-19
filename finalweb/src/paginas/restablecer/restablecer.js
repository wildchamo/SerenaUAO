import React, {Component} from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Boton from "../../componentes/Boton/Boton";
import Campo from "../../componentes/Campo/Campo";

import Headerr from "../../componentes/headerr/headerr.js"
import "./restablecer.css";

class Restablecer extends Component {
    render(){
        return(
            <div className="restablecer">
                <Headerr/>
                <div className="restablecerTexto"> 
                <h2>Restablecer contraseña</h2>
                <p>Para restablecer su contraseña, envíe su nombre de usuario o su dirección de correo electrónico , le enviaremos un email con instrucciones para poder acceder de nuevo.
</p>
                <p>Ingresa tu correo o nombre de usuario</p>
                <Campo tamaño="campo-s" tipo="texto"/>

                <Link to="/">
                        <Boton tamaño="boton1" titulo="Enviar"></Boton>
                    </Link>
                </div>
 
                
            </div>
            

            )
        }
    }
    export default Restablecer;