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

  state = {

  }

  render() {
    const isLogged = true;
    return (
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/auth' component={Auth} />
        {isLogged ? 
          <Fragment>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/records' component={Records} />
            <Route path='/analytics' component={Analytics} />
            <Route path='/blog' component={Blog} />
            <Route path='/settings' component={Settings} />
            <Route component={NotFound} />
          </Fragment>
         : <Redirect to={{ pathname: '/auth' }} />
        }
      </Switch>
    );
  }
}

export default App;
