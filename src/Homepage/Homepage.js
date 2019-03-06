import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Start from './Start/Start';
import Support from './Support/Support';
import Team from './Team/Team';
import { withRouter } from 'react-router-dom';
import './Homepage.css';


const homepage = props => {

  return (
    <Fragment className='mainWrapper'>
      
      <div className='withoutFooter'>
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/home/start' component={Start} />
          <Route exact path='/home/support' component={Support} />
          <Route exact path='/home/team' component={Team} />
        </Switch>
      </div>

      <Footer className='footer' />

    </Fragment>
  )
}

export default withRouter(homepage);