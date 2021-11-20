import React, { Component,useEffect,useState } from "react";
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
//const url="https://run.mocky.io/v3/1171e870-6e25-47f8-904a-efaf696ff3a0";//url santiago

const url="https://run.mocky.io/v3/4783fd63-a696-4595-b29b-3275cff0253d";//url juan david


const getData =response_Data=>{
    const{Citaid,Psicologo,PeriodoAc,Hora,FechaSol,Mensaje,FyHMsj}=response_Data;
    const data3={Citaid,
                    Psicologo,PeriodoAc,Hora,FechaSol,Mensaje,FyHMsj
                }
return data3;
}

var data1={}
var data2={}
var data3={}
var data4={}

function Historial(){

    const[data,setData]=useState([]);

    useEffect(()=>{
 
     fetch(url)
     .then((response) => {    
       return response.json();    
     })
     .then((arreglo) => {
       data1=getData(arreglo.Citas[0]);     
       data2=getData(arreglo.Citas[1]);
       data3=getData(arreglo.Citas[2]);     
       data4=getData(arreglo.Citas[3]);
       setData(data4);          
     })
     
    }, [setData])

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
                <CitaHisto data={data1} evento={openmodalEstado}></CitaHisto>
                <CitaHisto data={data2} evento={openmodalEstado}></CitaHisto>
                <CitaHisto data={data3} evento={openmodalEstado}></CitaHisto>
                <CitaHisto data={data4} evento={openmodalEstado}></CitaHisto>
            </div> 
            <div className="contenedorMes">
                <img className="linea" src={linea}></img>
                <h1 className="tituloMes">Febrero</h1>
                <img className="linea" src={linea}></img>
            </div>
            <div className="contenedorCitasHisto">
                <CitaHisto data={data1}></CitaHisto>
                <CitaHisto data={data2}></CitaHisto>
                <CitaHisto data={data3}></CitaHisto>
            </div>                 
            <ModalEstado isOpen={isOpenmodalEstado} closeModal={closemodalEstado} data={data} seccion="historial"/>
        </div>
    )
}

export default Historial;