import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import * as serviceWorker from './serviceWorker';
import bg from './Header/ib.png'


const modals = [
<Header/>,
<Footer/>,
<img 
    src={bg}
    alt="Cool bg"
    width="1200"
/>
]
ReactDOM.render(modals, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
