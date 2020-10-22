import React from 'react';
import Login from '../components/Login';
import Logout from '../components/Logout'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';

// Each logical "route" has two components, one for
// the mainNavigation and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the mainNavigation and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
  {
    path: "/",
    exact: true,
    forceRefresh: true,
    mainNavigation: () => <div>home!</div>,
    main: () => <Typography variant="h1">Home</Typography>

  },
  {
    path: "/login",
    exact: true,
    mainNavigation: () => <div>login!</div>,
    main: () => <Login/>
  },
  {
    path: "/user",
    exact: true,
    mainNavigation: () => <div>User!</div>,
    main: () => (
      <Container className="App" disableGutters={false} >
        <Typography variant="h1">User</Typography>
        <Logout/>
      </Container>
    )
  },
  {
    path: "/designer",
    exact: true,
    mainNavigation: () => <div>designer!</div>,
    main: () => (
      <Container className="App" disableGutters={false} >
        <Typography variant="h1">designer</Typography>
      </Container>
    )
  },
  {
    path: "/plans",
    exact: true,
    mainNavigation: () => <div>plans!</div>,
    main: () => (
      <Container className="App" disableGutters={false} >
        <Typography variant="h1">plans</Typography>
      </Container>
    )
  },
  {
    path: "/manager",
    exact: true,
    mainNavigation: () => <div>manager!</div>,
    main: () => (
      <Container className="App" disableGutters={false} >
        <Typography variant="h1">manager</Typography>
      </Container>
    )
  },
  {
    path: "/samples",
    exact: true,
    mainNavigation: () => <div>samples!</div>,
    main: () => (
      <Container className="App" disableGutters={false} >
        <Typography variant="h1">samples</Typography>
      </Container>
    )
  },
  {
    path: "/developer",
    exact: true,
    mainNavigation: () => <div>developer!</div>,
    main: () => (
      <Container className="App" disableGutters={false} >
        <Typography variant="h1">developer</Typography>
      </Container>
    )
  }
];

export default routes;