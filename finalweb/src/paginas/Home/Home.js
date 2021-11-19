import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Boton from "../../componentes/Boton/Boton";
import Cita from "../../componentes/Cita/Cita";
import Titulo from "../../componentes/Titulo/Titulo";
import bgimg from "../../imagenes/bg-home.jpg";
import "./Home.css"
import ModalGL from "../../componentes/Modal/ModalGL";
import useModal from "../../hooks/useModal";
import ModalEstado from "../../componentes/modalEstado/ModalEstado";
import CuestionarioModal from "../../componentes/CuestionarioModal/CuestonarioModal";


const url = "https://run.mocky.io/v3/85d46403-89e5-4993-aac2-435b63ddc4e7"

//const axios = require('axios').default;
const data = {
    Psicologo: "Juan Sebastian Zuñiga",
    PeriodoAc: "2021-03",
    Estado: "Preaprobada",
    FechaSol: "18/06/21",
    Mensaje: "Su cita fue pre-aprobada.Se ha verificado su formato y cumple con las condiciones",
    FyHMsj: "18/06/21 08:30",
    Enlace: "meet-ssd-dfse-rtr"
}

const data2 = {
    Psicologo: "Juan Sebastian Alba",
    FechaSol: "19/05/21",
    Estado: "Aprobada"
}

function Home() {
    const [isOpenmodalEstado, openmodalEstado, closemodalEstado] = useModal(false);
    const [isOpenCuest, openmodalCuest, closeModalCuest] = useModal(false);

    return (
        <div className="home-body">
            <div className="h-agendar">
                <div className="h-bg-container">
                    <img className="h-bg-img" src={bgimg}></img>
                    <div className="dark"></div>
                </div>
                <div className="agendar-container">
                    <h1 className="agendar">Agenda tu cita con un psicólogo UAO</h1>
                    <Boton tamaño="boton3" titulo="Agendar" evento={openmodalCuest} ></Boton>  
                </div>
            </div>
            <div className="h-dates">
                <Titulo texto="Citas agendadas" />
                <div className="dates-container">
                    <Cita data={data} evento={openmodalEstado} />
                    <Cita data={data2} evento={openmodalEstado} />
                    <Link to="/Historial" className="link-pass">
                        <Boton titulo="Historial de citas" tamaño="botonh" />
                    </Link>
                </div>
            </div>
            <ModalEstado isOpen={isOpenmodalEstado} closeModal={closemodalEstado} data={data} />
            <CuestionarioModal isOpen={isOpenCuest} closeModal={closeModalCuest}  />
        </div>
    )
}

/* class Home extends Component {

    

    componentDidMount() {
        
    }

    render() {
        
        return (
            <div className="home-body">
                <div className="h-agendar">
                    <div className="h-bg-container">
                        <img className="h-bg-img" src={bgimg}></img>
                        <div className="dark"></div>
                    </div>
                    <div className="agendar-container">
                        <h1 className="agendar">Agenda tu cita con un psicólogo UAO</h1>
                        <Boton tamaño="boton3" titulo="Agendar"></Boton>
                    </div>
                </div>
                <div className="h-dates">
                    <Titulo texto="Citas agendadas"/>
                    <div className="dates-container">
                        <Cita data={data} evento={openmodalEstado}/>
                        <Cita data={data2}/>
                        <Link to="/Historial" className="link-pass">
                        <Boton titulo="Historial de citas" tamaño="botonh"/>
                        </Link>                        
                    </div>
                </div>
                <modalEstado isOpen={isOpenmodalEstado} closeModal={closemodalEstado} />
            </div>
        )
    }
} */

export default Home;