// CODED BY : Michael Lacroix ( MLWeb )
// LAST EDIT : 2020-09-25


import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// components
import App from './components/App';

// css
import "bootstrap/dist/css/bootstrap.min.css";
import './stylesheets/main.sass';



// Import react-router


// import { BrowserRouter as Route } from "react-router-dom";

ReactDOM.render(
  <React.Fragment>
    {/* <Navigation /> */}
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
