import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Routes } from 'common';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
