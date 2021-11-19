import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Boton from "../../componentes/Boton/Boton";
import Titulo from "../../componentes/Titulo/Titulo";
import "./Historial.css"
import BotonVolver from "../../componentes/CitaHisto/BotonVolver/BotonVolver";
import CitaHisto from "../../componentes/CitaHisto/CitaHisto";
import linea from "../../imagenes/linea.jpeg"

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
                <div className="contenedorMes">
                    <img className="linea" src={linea}></img>
                    <h1 className="tituloMes">Enero</h1>
                    <img className="linea" src={linea}></img> 
                </div>
                <div className="contenedorCitasHisto">
                    <CitaHisto data={data}></CitaHisto>
                    <CitaHisto data={data}></CitaHisto>
                    <CitaHisto data={data}></CitaHisto>
                    <CitaHisto data={data}></CitaHisto>
                </div> 
                <div className="contenedorMes">
                    <img className="linea" src={linea}></img>
                    <h1 className="tituloMes">Febrero</h1>
                    <img className="linea" src={linea}></img>
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