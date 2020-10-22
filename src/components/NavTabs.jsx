import React from 'react';
import './app/App.css';
import {Tabs, Tab} from '@material-ui/core';
import { Route, Link as RouterLink } from 'react-router-dom';


function a11yProps(index) {
  return {
    id: `app-tab-${index}`,
    'aria-controls': `app-tabpanel-${index}`,
  };
}

export default function NavTabs() {

  return (
    <Route
      path="/"
      render={({ location }) => (
        <Tabs value={location.pathname} aria-label="App tabs">
          <Tab label="AQUARIUM" {...a11yProps(0)} component={RouterLink} value="/" to="/"/>
          <Tab label="DESIGNER" {...a11yProps(0)} component={RouterLink} value="/designer" to="/designer"/>
          <Tab label="PLANS" {...a11yProps(1)} component={RouterLink} value="/plans" to="/plans"/>
          <Tab label="MANAGER" {...a11yProps(2)} component={RouterLink} value="/manager" to="/manager"/>
          <Tab label="SAMPLES" {...a11yProps(3)} component={RouterLink} value="/samples" to="/samples"/>
          <Tab label="DEVELOPER" {...a11yProps(4)} component={RouterLink} value="/developer" to="/developer"/>
          <Tab label="USER" {...a11yProps(5)} component={RouterLink} value="/user" to="/user"/>
        </Tabs>
      )}
    />
  );
}
