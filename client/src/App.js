import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { withCookies } from 'react-cookie'
import ReactGA from 'react-ga';
import 'autotrack/lib/plugins/max-scroll-tracker';

import './App.scss';

import HomePage from './HomePage/HomePage';
import Overview from './Platform/Overview/Overview';

ReactGA.initialize('UA-136434890-1', {
  cookieDomain: 'auto',
  // debug: true
});

ReactGA.plugin.require('maxScrollTracker');

class App extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (<HomePage cookies={this.props.cookies}/>)} />
        {/* <Route exact path='/overview' render={() => (<Overview cookies={this.props.cookies}/>)} /> */}
        <Redirect from='*' to='/' />
      </Switch>
    );
  }
};

export default withCookies(App);