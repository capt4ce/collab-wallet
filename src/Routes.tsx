import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { PATH_HOME, PATH_LOGIN, PATH_RECORD } from './utils/constants';
const Home = lazy(() => import('./views/Home'));
const Login = lazy(() => import('./views/Login'));
const AddEditRecord = lazy(() => import('./views/AddEditRecord'));

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={PATH_HOME} default>
        <Home />
      </Route>
      <Route exact path={PATH_LOGIN} default>
        <Login />
      </Route>
      <Route exact path={PATH_RECORD} default>
        <AddEditRecord />
      </Route>
    </Switch>
  );
};

export default Routes;
