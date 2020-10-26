import React from 'react';
import './app/App.css';
import TopLeftHamburgerMenu from './TopLeftHamburgerMenu';
import Home from './Home'
import Designer from './Designer';
import Plan from './Plan';
import Manager from './Manager';
import Developer from './Developer';
import User from './User';
import Samples from './Samples';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Tabs, Tab} from '@material-ui/core';

function a11yProps(index) {
  return {
    id: `app-tab-${index}`,
    'aria-controls': `app-tabpanel-${index}`,
  };
}

const MainNavigation = (props) => {
  console.log(props)
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  // Declaring index objects for constant lookup time
  const tabNameToIndex = {
    0: "aquarium",
    1: "designer",
    2: "plan",
    3: "manager",
    4: "samples",
    5: "developer",
    6: "user"
  };

  const indexToTabName = {
    aquarium: 0,
    designer: 1,
    plan: 2,
    manager: 3,
    samples: 4,
    developer: 5,
    user: 6,
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/home/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <TopLeftHamburgerMenu/>
          <Tabs value={selectedTab} onChange={handleChange} aria-label="App tabs">
            <Tab label="aquarium" { ...a11yProps(0) } />
            <Tab label="designer" { ...a11yProps(1) } />
            <Tab label="plan" { ...a11yProps(2) } />
            <Tab label="manager" { ...a11yProps(3) } />
            <Tab label="samples" { ...a11yProps(4) } />
            <Tab label="developer" { ...a11yProps(5) } />
            <Tab label="user" { ...a11yProps(6) } />
          </Tabs>
        </Toolbar>
      </AppBar>
      { selectedTab === 0 && <Home /> }
      { selectedTab === 1 && <Designer /> }
      { selectedTab === 2 && <Plan /> }
      { selectedTab === 3 && <Manager /> }
      { selectedTab === 4 && <Samples /> }
      { selectedTab === 5 && <Developer /> }
      { selectedTab === 6 && <User /> }
    </>
  );
};

export default MainNavigation;