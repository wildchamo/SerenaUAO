import React, {Component} from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Boton from "../../componentes/Boton/Boton";
import Campo from "../../componentes/Campo/Campo";
import imglogin from "../../imagenes/imagenLogin.png"
import logolog from "../../imagenes/logo-l.png"
import "./Login.css"

class Login extends Component {
    render(){
        return(
            <div className="login-body">
                <div className="img-container">
                    <img className="img-login" src={imglogin}></img>
                </div>
                <div className="form-container">
                    <img className="logo-login" src={logolog}></img>
                    <div className="l-field-container">
                        <Campo tamaño="campo-s" texto="Usuario" tipo="texto"/>
                        <Campo tamaño="campo-s" texto="Contraseña" tipo="password"/>
                        <Link to="/restablecer" className="link-pass">
                            <h4 className="f-pass">¿Olvido su nombre de usuario o contraseña?</h4>
                        </Link>
                    </div>
                    <Link to="/Home">
                        <Boton tamaño="boton1" titulo="Acceder"></Boton>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Login