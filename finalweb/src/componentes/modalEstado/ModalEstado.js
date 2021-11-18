import React from "react";
import ModalGL from "../Modal/ModalGL";

const ModalEstado = ({isOpen, closeModal}) => {
    return (
        <ModalGL isOpen={isOpen} closeModal={closeModal}>
            <h1>Photo</h1>
        </ModalGL>
    )
}

export default ModalEstado