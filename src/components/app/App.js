import React , { Fragment, useState } from 'react';
import './App.css';
import Home from '../Home';

import TopLeftHamburgerMenu from '../TopLeftHamburgerMenu';
import NavTabs from '../MainNavigation';
import routes from '../../utilities/routes';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Switch, Route, Redirect } from "react-router-dom";
import MainNavigation from '../MainNavigation';

const App = () => {
  const [activeSession, setActitveSession] = useState(!!localStorage.getItem('token'));

  return (
    <Container className="App" disableGutters={false} >



      { /* Users should see the top navigation regardless of route
        but only only if they are logged in, i.e. they have an active token */
        // activeSession &&
        //   <Fragment>
        //     <MainNavigation />
        //   </Fragment>
      }

      {/* render only one route at time using Switch */}
      {/* <Switch> 
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
       */}

      <Switch>
      { /* Users cannot interact with the app if they do not have a token */
        !activeSession &&
           <Redirect to="/login" />
      }
        <Route
          exact
          path="/:page?"
          render={(props) => <MainNavigation {...props} />}
        />
      </Switch>
    </Container>
  );
}

export default App