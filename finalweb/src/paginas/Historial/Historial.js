import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Titulo from "../../componentes/Titulo/Titulo";
import "./Historial.css"
import BotonVolver from "../../componentes/CitaHisto/BotonVolver/BotonVolver";
import CitaHisto from "../../componentes/CitaHisto/CitaHisto";
import linea from "../../imagenes/linea.jpeg";
import volver from "../../imagenes/volveratrasrojo.png";
import TituloModal from "../../componentes/TituloModal/TituloModal";
import BotonSoporte from "../restablecer/botonSoporte";
import Notificacion from "../../componentes/Notificacion/Notificacion";
import useModal from "../../hooks/useModal";
import ModalEstado from "../../componentes/modalEstado/ModalEstado";
import  Header from "../../componentes/header/header.js"
//import CuestionarioModal from "../../componentes/CuestionarioModal/CuestonarioModal";

const data = {
    Citaid: "1",
    hora:"10:00 am",
    FechaSol: "18/06/21",
    Psicologo: "Alvaro Gomez",
    PeriodoAc: "2021-03",
    Mensaje: "Su cita fue pre-aprobada.Se ha verificado su formato y cumple con las condiciones",
    FyHMsj: "18/06/21 08:30"
} 

function Historial(){
    const [isOpenmodalEstado, openmodalEstado, closemodalEstado] = useModal(false);

    return (
        <div className="historial-body">
            <Header/>
            <BotonSoporte/>
            <div className="Titulo">
                <Link to="/Home">
                    <BotonVolver imagen={volver} />                           
                </Link> 
                <Titulo texto="Historial de Citas"/>               
            </div>  
            <div className="contenedorMes">
                <img className="linea" src={linea}></img>
                <h1 className="tituloMes">Enero</h1>
                <img className="linea" src={linea}></img> 
            </div>
            <div className="contenedorCitasHisto">
                <CitaHisto data={data} evento={openmodalEstado}></CitaHisto>
                <CitaHisto data={data} evento={openmodalEstado}></CitaHisto>
                <CitaHisto data={data} evento={openmodalEstado}></CitaHisto>
                <CitaHisto data={data} evento={openmodalEstado}></CitaHisto>
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
            <ModalEstado isOpen={isOpenmodalEstado} closeModal={closemodalEstado} data={data} seccion="historial"/>
        </div>
    )
}

export default Historial;