import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TikTuksContainer, UserContainer } from 'containers';
import { Routes } from 'common';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.HOME} exact>
          <TikTuksContainer />
        </Route>
        <Route path={Routes.USERS()} exact>
          <UserContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
