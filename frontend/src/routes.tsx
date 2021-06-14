import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Start from './pages/Start/Start';
import EnterPhone from './pages/EnterPhone/EnterPhone';

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/login" component={EnterPhone} />
    </Switch>
  );
};
