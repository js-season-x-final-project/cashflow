import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
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
    let isLogged = true;
    return (
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/auth' component={Auth} />
        {isLogged ? 
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/records' component={Records} />
            <Route exact path='/analytics' component={Analytics} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/settings' component={Settings} />
            
          </Switch>
         : <Redirect to={{ pathname: '/auth' }} />
        }
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
