import { useState } from 'react';
import { Modal} from 'components';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">


      {isOpen ? <Modal closeModal={() => setIsOpen(false)}/> : <button onClick={() => setIsOpen(true)}>Open Modal</button>}

    </div>
  );
}

export default App;
