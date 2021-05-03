import React from 'react';
import './App.scss';
import Button from './components/Button/Button';
import Start from './pages/Start/Start';

function App() {
  return (
    <div className="App">
      <Start />
      <Button title="Get started" size="sm" />
    </div>
  );
}

export default App;
