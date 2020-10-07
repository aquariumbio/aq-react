import React from 'react';
import './App.css';
import {Tabs, Tab} from '@material-ui/core';


function a11yProps(index) {
  return {
    id: `app-tab-${index}`,
    'aria-controls': `app-tabpanel-${index}`,
  };
}

export default function NavTabs() {
  const [value, setValue] = React.useState(5);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs value={value} onChange={handleChange} aria-label="App tabs">
        <Tab label="DESIGNER" {...a11yProps(0)} />
        <Tab label="PLANS" {...a11yProps(1)} />
        <Tab label="MANAGER" {...a11yProps(2)} />
        <Tab label="SAMPLES" {...a11yProps(3)} />
        <Tab label="DEVELOPER" {...a11yProps(4)} />
        <Tab disabled label="USER" {...a11yProps(5)} />
    </Tabs>
  );
}
