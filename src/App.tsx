import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import { List } from './pages/list';
import Set from './pages/set';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={List} />
          <Route path='/set' component={Set} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;