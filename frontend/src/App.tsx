import React from 'react';

import './App.scss';
import Start from './pages/Start/Start';
import EnterPhone from './pages/EnterPhone/EnterPhone';
import Iphone from './components/Iphone/Iphone';

function App() {
  return (
    <div className="App">
      <Iphone />
      <Start />
      {/*<EnterPhone/>*/}
    </div>
  );
}

export default App;
