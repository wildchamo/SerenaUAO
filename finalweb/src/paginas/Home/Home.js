import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Boton from "../../componentes/Boton/Boton";
import Cita from "../../componentes/Cita/Cita";
import Titulo from "../../componentes/Titulo/Titulo";
import bgimg from "../../imagenes/bg-home.jpg";
import "./Home.css"

const url="https://run.mocky.io/v3/85d46403-89e5-4993-aac2-435b63ddc4e7"

//const axios = require('axios').default;
const data = {
    Psicologo: "Juan Sebastian Zuñiga",
    FechaSol: "18/06/21",
    Estado:"Preaprobada"
}

const data2 = {
    Psicologo: "Juan Sebastian Alba",
    FechaSol: "19/05/21",
    Estado:"Aprobada"
}


class Home extends Component {

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
                        <Cita data={data}/>
                        <Cita data={data2}/>
                        <Boton titulo="Historial de citas" tamaño="botonh"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;