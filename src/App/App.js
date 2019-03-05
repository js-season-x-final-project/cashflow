import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
// import Home from '../Homepage/Home/Home';
// import Start from '../Homepage/Start/Start';
// import Team from '../Homepage/Team/Team';
// import Support from '../Homepage/Support/Support';
import Auth from '../Auth/Auth';
import Dashboard from '../MainPage/Dashboard/Dashboard';
import Records from '../MainPage/Records/Records';
import Analytics from '../MainPage/Analytics/Analytics';
import Blog from '../MainPage/Blog/Blog';
import Settings from '../MainPage/Settings/Settings';
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
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/records' component={Records} />
        <Route exact path='/analytics' component={Analytics} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/settings' component={Settings} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;