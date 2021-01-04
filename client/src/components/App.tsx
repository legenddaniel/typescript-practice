import React, { useState } from 'react';
import Modal from './modal/Modal';

import LoginForm from './LoginForm';
import ModalHeader from './modal/ModalHeader';
import ModalBody from './modal/ModalBody';
import ModalFooter from './modal/ModalFooter';
import ButtonClose from './buttons/ButtonClose';

function App() {
  const [open, setOpen] = useState(false);

  const toggleModal = (): void => {
    setOpen(!open);
  };

  return (
    <>
      <Modal open={open}>
        <ButtonClose />
        <ModalHeader>
          Header
        </ModalHeader>
        <ModalBody>
          <LoginForm />
        </ModalBody>
        <ModalFooter>
          Footer
        </ModalFooter>
      </Modal>
      <button onClick={toggleModal}>Toggle Modal</button>
    </>
  );
}

export default App;
