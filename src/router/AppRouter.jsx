/**
 * @DECS app公共页面
 * @FILENAME AppRouter
 * @time 2020/6/1 5:30 下午
 * @userName cfj
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../page/LoginRegister/Login';
import Register from '../page/LoginRegister/Register';

import AsyncRouter from './AsyncRouter';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <AsyncRouter />
        </Route>
      </Switch>
    </Router>
  );
};
export default AppRouter;
