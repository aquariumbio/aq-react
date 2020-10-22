import React from 'react';
import Login from '../components/Login';
import Home from '../components/Home';
import User from '../components/User';
import Plan from '../components/Plan';
import Manager from '../components/Manager';
import Samples from '../components/Samples';
import Developer from '../components/Developer';
import Designer from '../components/Designer';

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
    main: () => <Home />

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
    main: () => <User />
  },
  {
    path: "/designer",
    exact: true,
    mainNavigation: () => <div>designer!</div>,
    main: () => <Designer />
  },
  {
    path: "/plan",
    exact: true,
    mainNavigation: () => <div>plans!</div>,
    main: () => <Plan />
  },
  {
    path: "/manager",
    exact: true,
    mainNavigation: () => <div>manager!</div>,
    main: () => <Manager />
  },
  {
    path: "/samples",
    exact: true,
    mainNavigation: () => <div>samples!</div>,
    main: () => <Samples />
  },
  {
    path: "/developer",
    exact: true,
    mainNavigation: () => <div>developer!</div>,
    main: () => <Developer/>
  }
];

export default routes;