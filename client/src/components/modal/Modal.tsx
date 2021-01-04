import { useState } from 'react';
import styled from 'styled-components';

import { PropsDialog } from '../../interfaces/props';

const ModalWrapper = styled.dialog`
    width: 60%;
    height: 60%;
    background-color: grey;
`;

const Modal = ({open, children}: PropsDialog): JSX.Element => {
    
    return (
        <ModalWrapper open={open}>
            <div className="modal-container">
                {children}
            </div>
        </ModalWrapper>
    )
}

export default Modal;