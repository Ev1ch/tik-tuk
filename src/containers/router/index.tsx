import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TrendingContainer, UserContainer } from 'containers';
import { Routes } from 'common';

const Router = function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.TRENDING} exact>
          <TrendingContainer />
        </Route>
        <Route path={Routes.USERS()} exact>
          <UserContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
