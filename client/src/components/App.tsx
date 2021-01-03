import React, { useState } from 'react';
import Modal from './modal/Modal';

import LoginForm from './LoginForm';
import ModalHeader from './modal/ModalHeader';
import ModalBody from './modal/ModalBody';
import ModalFooter from './modal/ModalFooter';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal open={open}>
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
      <button onClick={setOpen.bind(null, !open)}>Toggle Modal</button>
    </>
  );
}

export default App;
