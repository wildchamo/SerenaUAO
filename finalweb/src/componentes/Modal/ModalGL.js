import React from 'react'
import './ModalGL.css'

const ModalGL = ({ isOpen, closeModal, tipo, children }) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className={tipo} onClick={handleModalDialogClick}>
                
                {children}

            </div>
        </div>
    )
}

export default ModalGL