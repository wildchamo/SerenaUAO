import React from 'react'
import './ModalGL.css'

const ModalGL = ({ isOpen, closeModal, children }) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
                
                {children}

            </div>
        </div>
    )
}

export default ModalGL