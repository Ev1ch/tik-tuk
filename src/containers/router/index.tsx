import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Routes } from 'common';
import { TikTuksContainer } from 'containers';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.HOME} exact>
          <TikTuksContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
