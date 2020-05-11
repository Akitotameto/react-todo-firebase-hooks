import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import { List } from './pages/list';
import { Set } from './pages/set';
import { Edit } from './pages/edit';

export const App: React.SFC = () =>
  (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={List} />
        <Route path='/set' component={Set} />
        <Route path='/edit' component={Edit} />
      </Switch>
    </BrowserRouter>
  )
