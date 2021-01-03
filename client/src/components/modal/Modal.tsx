import { useState } from 'react';

import { PropsDialog } from '../../interfaces/props';


const Modal = (props: PropsDialog): JSX.Element => {
    const { open, children } = props;

    return (
        <dialog className="modal-wrapper" open={open}>
            <div className="modal-container">
                {children}
            </div>
        </dialog>
    )
}

export default Modal;