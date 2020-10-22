import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import ReactGA from "react-ga";
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CssBaseline/>
      <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// Google Analytics resources
export const initGA = () => {       
  ReactGA.initialize('UA-177438863-1'); // GA tracking id
}

export const GApageView = (page) => {   
  ReactGA.pageview(page);   
}

export const GAmodalView = (modal) => {
  ReactGA.modalview(modal);
}

export const GAevent = (categoryName, eventName) => {
  ReactGA.event({       
      category: categoryName,  // Required
      action: eventName,       // Required
      label: 'labelName',       
      value: 10,       
      nonInteraction: false     
  });   
}

export const GAtiming = (categoryName, variableName, valueNum) => {
  ReactGA.timing({       
      category: categoryName,       
      variable: variableName,       
      value: valueNum
  });
};

export const GAexception = (detail) => {
  ReactGA.exception({ description: detail });
};
// TODO: Set up custom exceptions page in GA admin

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
