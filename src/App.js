import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.scss';

import HomePage from './HomePage/HomePage';

class App extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Redirect from='*' to='/' />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;