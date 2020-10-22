import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MainMenu from './MainMenu';
import NavTabs from './NavTabs';
import {Redirect} from 'react-router-dom';

export default function Home(props) {
  // Protect the home page when there is no token
  if (!localStorage.getItem('token')) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <AppBar position="static" >
        <Toolbar>
          <MainMenu/>
          <NavTabs/> 
        </Toolbar>
      </AppBar>
    </>
  );
}