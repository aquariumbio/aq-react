import React from 'react';
import './App.css';
import {Container, AppBar, Toolbar, IconButton, Typography, Button, Tabs, Tab} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';

// Custom styling for material-UI components
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container className="App" disableGutters={true} >
      <AppBar position="static" >
        <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" align="left" className={classes.title}>AQUARIUM</Typography>
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="DESIGNER" {...a11yProps(0)} />
                <Tab label="PLANS" {...a11yProps(1)} />
                <Tab label="MANAGER" {...a11yProps(2)} />
                <Tab label="SAMPLES" {...a11yProps(3)} />
                <Tab label="DEVELOPER" {...a11yProps(3)} />
                <Tab disabled label="USER" {...a11yProps(4)} />
              </Tabs>
              {/* <Button color="inherit">DESIGNER</Button>
              <Button color="inherit">PLANS</Button>
              <Button color="inherit">MANAGER</Button>
              <Button color="inherit">SAMPLES</Button>
              <Button color="inherit">DEVELOPER</Button>
              <Button color="inherit">USERNAME</Button> */}
          </Toolbar>
      </AppBar>
    </Container>
  );
}

export default App;
