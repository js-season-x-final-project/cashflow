import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import Auth from '../Auth/Auth';
import Mainpage from '../MainPage/MainPage';
import NotFound from '../NotFound/NotFound';
import './App.css';

class App extends Component {
 
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/home' component={Homepage} />
        <Route exact path='/home/start' component={Homepage} />
        <Route exact path='/home/team' component={Homepage} />
        <Route exact path='/home/support' component={Homepage} />
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/main/dashboard' component={Mainpage} />
        <Route exact path='/main/records' component={Mainpage} />
        <Route exact path='/main/analytics' component={Mainpage} />
        <Route exact path='/main/blog' component={Mainpage} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;