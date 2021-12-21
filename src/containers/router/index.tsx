import React from 'react';
import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom';
import { TrendingContainer, UserContainer } from 'containers';
import { Routes } from 'common';

const Router = function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.TRENDING} element={<TrendingContainer />} />
        <Route path={Routes.USERS()} element={<UserContainer />} />
        <Route path={Routes.ALL} element={<Navigate to={Routes.TRENDING} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
