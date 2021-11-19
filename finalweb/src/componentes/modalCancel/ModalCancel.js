import React from "react";
import BotonVolver from "../CitaHisto/BotonVolver/BotonVolver";
import ModalGL from "../Modal/ModalGL";
import Btnback from "../../imagenes/volveratrasrojo.png"
import ImgCanc from "../../imagenes/Cancelar.png"
import ImgAgen from "../../imagenes/Agendar.png"
import "./ModalCancel.css"
import Boton from "../Boton/Boton";


const getTipo=function(tipo){
    if(tipo=="Cancelar"){
        return(<img src={ImgCanc}/>)
    }
    if(tipo=="Agendar"){
        return(<img src={ImgAgen}/>)
    }
}

const getIcon=function(icon,evento){
    if(icon){
        return(<BotonVolver imagen={Btnback} evento={evento}/>)
    }else{
        return (<div></div>)
    }
}

const ModalCancel=function({isOpen, closeModal, openmodalEstado, titulo, descripción, tipo, icon}){
    const opandclo=function(){//Función para abrir el siguiente modal y cerrar el anterior
        closeModal()
        openmodalEstado()
    }
    return(
        <ModalGL tipo="modal-cancelar" isOpen={isOpen} closeModal={closeModal}>
            <div className="m-cancel-cont">
                <div className="m-cancel-btn-back">{getIcon(icon,opandclo)}</div>
                {getTipo(tipo)}
                <div>
                    <h2>{titulo}</h2>
                    <h3>{descripción}</h3>
                </div>
                <Boton tamaño="boton" titulo="Confirmar" evento={closeModal}/>
            </div>
        </ModalGL>
    )

}

export default ModalCancel