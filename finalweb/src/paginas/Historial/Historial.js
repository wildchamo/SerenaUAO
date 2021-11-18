import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Boton from "../../componentes/Boton/Boton";
import Titulo from "../../componentes/Titulo/Titulo";
import "./Historial.css"
import BotonVolver from "../../componentes/CitaHisto/BotonVolver/BotonVolver";
import CitaHisto from "../../componentes/CitaHisto/CitaHisto";

const data = {
    titulo: "Cita1",
    hora:"10:00 am",
    fecha: "18/06/21"   
}

class Historial extends Component {

    render() {
        return (
            <div className="historial-body">
                <div className="Titulo">
                    <Link to="/Home">
                        <BotonVolver/>
                    </Link> 
                    <Titulo texto="Historial de Citas"/>
               
                </div>  
                <div className="contenedorCitasHisto">
                    <CitaHisto data={data}></CitaHisto>
                    <CitaHisto data={data}></CitaHisto>
                    <CitaHisto data={data}></CitaHisto>
                </div> 
                <div className="contenedorCitasHisto">
                    <CitaHisto data={data}></CitaHisto>
                    <CitaHisto data={data}></CitaHisto>
                    <CitaHisto data={data}></CitaHisto>
                </div> 
            </div>
        )
    }
}

export default Historial;