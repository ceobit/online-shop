import React from 'react';
import { Router } from 'react-router-dom';

import './App.scss';
import Start from './pages/Start/Start';
import EnterPhone from './pages/EnterPhone/EnterPhone';
import Iphone from './components/Iphone/Iphone';
import { useRoutes } from './routes';
import { history } from './history';

function App() {
  const routes = useRoutes();

  return (
    <div className="App">
      <Iphone />
      <Router history={history}>{routes}</Router>
      {/*/!*<Start />*!/*/}
      {/*<EnterPhone />*/}
    </div>
  );
}

export default App;
