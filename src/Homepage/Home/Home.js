import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Home.css'

const home = props => {

  return (
    <Fragment>
      <div className='wrapper'>

        <Header />

        <div className='firstPart'>
          <div className='firstPartInner'>
          <h1>Your Finances in One Place</h1>
          </div>
        </div>

        <div className='secondPart'>

        </div>


      </div>
      <Footer />
    </Fragment>
  )
}

export default home