import React, { useState,useEffect } from "react";
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
import BotonSoporte from "../restablecer/botonSoporte";
import ModalCancel from "../../componentes/modalCancel/ModalCancel";
import ModalCalen from "../../componentes/modalCalendario/ModalCalen";
import moment from "moment";
import Header from "../../componentes/header/header"

//const url = "https://run.mocky.io/v3/6db91af2-9a1e-461b-b002-89325ca5cb33";//url santiago

const url = "https://run.mocky.io/v3/b6547fc8-f94c-4023-9248-5d9b2c1d90a1";//url juan david


const getData =response_Data=>{
    const{Psicologo,PeriodoAc,Estado,FechaSol,Mensaje,FyHMsj,Enlace}=response_Data;
    const data3={
                    Psicologo,PeriodoAc,Estado,FechaSol,Mensaje,FyHMsj,Enlace
                }
return data3;
}

var data4={}
var data5={}
function Home() {

   const[data,setData]=useState([]);

   useEffect(()=>{

    fetch(url)
    .then((response) => {    
      return response.json();    
    })
    .then((arreglo) => {
      data4=getData(arreglo.Citas[0]);     
      data5=getData(arreglo.Citas[1]);
      setData(data4);          
    })
    
   }, [setData])

 

  
    const [value, setValue] = useState(moment().locale('es', null));

    const [isOpenmodalEstado, openmodalEstado, closemodalEstado] = useModal(false);
    const [isOpenCancel, openmodalCancel, closeModalCancel] = useModal(false);

    const [isOpenmodalEstado2, openmodalEstado2, closemodalEstado2] = useModal(false);
    const [isOpenCancel2, openmodalCancel2, closeModalCancel2] = useModal(false);

    const [isOpenCuest, openmodalCuest, closeModalCuest] = useModal(false);
    const [isOpenCalen, openmodalCalen, closeModalCalen] = useModal(false);
    const [isOpenDone, openmodalDone, closeModalDone] = useModal(false);

    return (
        <div className="home-body">
            <Header/>
            <BotonSoporte/>
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
                    <Cita data={data4} evento={openmodalEstado} />
                    <Cita data={data5} evento={openmodalEstado2} />
                    <Link to="/Historial" className="link-pass">
                        <Boton titulo="Historial de citas" tamaño="botonh" />
                    </Link>
                </div>
            </div>
            
            {/*Modales estado de cita*/}
            <ModalEstado isOpen={isOpenmodalEstado} closeModal={closemodalEstado} data={data4} openModalCancel={openmodalCancel} seccion="home"/>
            <ModalEstado isOpen={isOpenmodalEstado2} closeModal={closemodalEstado2} data={data5} openModalCancel={openmodalCancel} seccion="home"/>
            
            <ModalCancel 
                isOpen={isOpenCancel} 
                closeModal={closeModalCancel} 
                openmodalEstado={openmodalEstado} 
                tipo="Cancelar" icon={true} titulo="¿Estas seguro de que deseas Cancelar esta cita?" descripción="¡Esta acción es irreversible!"/>
            {/*Fin modales estado de cita*/}
            
            {/*Modales agendar citas*/}
            <CuestionarioModal isOpen={isOpenCuest} closeModal={closeModalCuest}  openmodalCalen={openmodalCalen}/>
            <ModalCalen isOpen={isOpenCalen} closeModal={closeModalCalen} openmodalCuest={openmodalCuest} openmodalDone={openmodalDone} value={value} setValue={setValue}/>
            <ModalCancel isOpen={isOpenDone} closeModal={closeModalDone} openmodalEstado={openmodalCalen} tipo="Agendar" icon={false} titulo="¡Agendada!" descripción="Tu cita ha sido agendada exitosamente. Puedes consultar su estado en la sección “Citas agendadas”"/>
            
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