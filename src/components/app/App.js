import React , { Fragment, useState } from 'react';
import './App.css';
import MainMenu from '../MainMenu';
import NavTabs from '../NavTabs';
import routes from '../../utilities/routes';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  const [activeSession, setActitveSession] = useState(!!localStorage.getItem('token'));

  return (
    <Container className="App" disableGutters={false} >

      { /* Users cannot interact with the app if they do not have a token */
        !activeSession &&
           <Redirect to="/login" />
      }

      { /* Users should see the top navigation regardless of route
        but only only if they are logged in, i.e. they have an active token */
        activeSession &&
          <Fragment>
            <AppBar position="static" >
              <Toolbar>
                <MainMenu/>
                <NavTabs/> 
              </Toolbar>
            </AppBar>
          </Fragment>
      }

      {/* render only one route at time using Switch */}
      <Switch> 
        {
          routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={<route.main />}
            />
          ))
        }
      </Switch>
    </Container>
  );
}

export default App