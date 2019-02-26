import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../Auth/Auth';
import Dashboard from '../Dashboard/Dashboard';
import NotFound from '../NotFound/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/home' component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
