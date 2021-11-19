import React from "react";
import "./ModalCalen.css"
import ModalGL from "../Modal/ModalGL";
import TituloModal from "../TituloModal/TituloModal";
import Btnback from "../../imagenes/volveratrasrojo.png"
import Calendario from "../Calendario/Calendario";
import Hora from "./Hora/Hora";

const ModalCalen = function ({ isOpen, closeModal, openmodalCuest, openmodalDone, value, setValue}) {
    const atras=function(){
        closeModal()
        openmodalCuest()
    }
    const adelante=function(){
        closeModal()
        openmodalDone()
    }
    return (
        <ModalGL tipo="modal-calen" isOpen={isOpen} closeModal={closeModal}>
            <div className="m-calen-cont">
                <TituloModal evento={atras} imagen={Btnback} titulo="Elige un horario"/>
                <div className="calen-cont">
                    <Calendario value={value} onChange={setValue}/>
                    <div className="horas-cont">
                        <div className="horario">
                            <h2 className="hora-title">Mañana</h2>
                        </div>
                        <div className="horario">
                            <h2 className="hora-title">Tarde</h2>
                            <div className="horas-disp">
                                <Hora hora="1:00 p.m" evento={adelante}/>
                                <Hora hora="2:00 p.m" evento={adelante}/>
                                <Hora hora="3:00 p.m" evento={adelante}/>
                            </div>
                        </div>
                        <div className="horario">
                        <h2 className="hora-title">Noche</h2>
                            <div className="horas-disp">
                                <Hora hora="6:00 p.m" evento={adelante}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ModalGL>
    )
}

export default ModalCalen