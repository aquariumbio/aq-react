import React, {useEffect} from 'react';
import './App.css';
import {initGA} from './index'
import {Container, AppBar, Toolbar, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './MainMenu';
import MainMenu from './MainMenu';
import NavTabs from './NavTabs';

// useEffect(() => { initGA(); }, []);


// Custom styling for material-UI components
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Container className="App" disableGutters={true} >
      <AppBar position="static" >
        <Toolbar>
          <MainMenu/>
          <Typography variant="h5" 
                      align="left" 
                      className={classes.title}>
            AQUARIUM
          </Typography>
          <NavTabs/> 
        </Toolbar>
      </AppBar>
    </Container>
  );
}
