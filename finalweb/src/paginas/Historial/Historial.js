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


const url="https://run.mocky.io/v3/1171e870-6e25-47f8-904a-efaf696ff3a0";
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
            <ModalEstado isOpen={isOpenmodalEstado} closeModal={closemodalEstado} data={data1} seccion="historial"/>
        </div>
    )
}

export default Historial;