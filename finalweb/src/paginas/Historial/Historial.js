import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Boton from "../../componentes/Boton/Boton";
import Titulo from "../../componentes/Titulo/Titulo";
import "./Historial.css"
import BotonVolver from "../../componentes/CitaHisto/BotonVolver/BotonVolver";

class Historial extends Component {

    render() {
        return (
            <div className="historial-body">
             <Titulo texto="Titulo"/>
               <Link to="/Home">
                        <BotonVolver/>
                </Link>  
               
            </div>
        )
    }
}

export default Historial;