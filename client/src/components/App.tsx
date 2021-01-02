import React, { useState } from 'react';
import Modal from './modal/Modal';

import LoginForm from './LoginForm';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal open={open}/>
      <LoginForm />
      <button onClick={setOpen.bind(null, !open)}>Toggle Modal</button>
    </>
  );
}

export default App;
