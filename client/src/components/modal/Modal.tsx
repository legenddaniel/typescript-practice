import { useState } from 'react';

import Props from '../../interfaces/props';

import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';


const Modal = (props: Props): JSX.Element => {

    return (
        <dialog className="modal-wrapper" open={props.open}>
            <div className="modal-container">
                <ModalHeader>header</ModalHeader>
                <ModalBody>body</ModalBody>
                <ModalFooter>footer</ModalFooter>
            </div>
        </dialog>
    )
}

export default Modal;