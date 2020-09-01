import React from 'react';
import './App.css';
import {Container, AppBar, Toolbar, IconButton, Typography, Button, makeStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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

function App() {
  const classes = useStyles();

  return (
    <Container className="App" disableGutters={true} >
      <AppBar position="static" >
        <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
              </IconButton>
              <Typography variant="h5" align="left" className={classes.title}>AQUARIUM</Typography>
              <Button color="inherit">DESIGNER</Button>
              <Button color="inherit">PLANS</Button>
              <Button color="inherit">MANAGER</Button>
              <Button color="inherit">SAMPLES</Button>
              <Button color="inherit">DEVELOPER</Button>
              <Button color="inherit">USERNAME</Button>
          </Toolbar>
      </AppBar>
    </Container>
  );
}

export default App;
