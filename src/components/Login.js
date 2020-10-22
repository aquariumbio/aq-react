import React, { useState, Fragment, useEffect } from 'react';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const [ login, setLogin ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ loginErrors, setLoginError ] = useState();
  const [ token, setToken ] = useState("");

  useEffect(() => {
    if (!loginErrors && token !== "") {
      // storetoken in local storage to keep user logged in between page refreshes
      localStorage.setItem('token', token);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .post(
      `http://localhost:3000/api/v3/user/sign_in?login=${login}&password=${password}`
    )
    .then(response => {
      if (response.data.status === 200 && response.data.data.token) {
        setLoginError()
        setToken(response.data.data.token)
        history.push("/");
        window.location.reload();

      }
  
      if (response.data.status !== 200) {
        return setLoginError(response.data.error)
      }
    });
  }

  if (localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }
  return (
    <Fragment>
      <header>
        <Typography variant="h1" gutterBottom>
          Your Lab
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Powered by Aquarium
        </Typography>
      </header>
      <form className={classes.root} noValidate autoComplete="off" name="login" onSubmit={handleSubmit}>
        <TextField name="login" required id="login" label="Login" variant="outlined" value={login} onChange={ event => setLogin(event.target.value)}/>
        <TextField name="password" required id="password" label="Password" type="password" variant="outlined" value={password} onChange={ event => setPassword(event.target.value)}/>
        { loginErrors &&
          <p>Invalid login/password combination</p>}
        <Button name="submit" type="submit">SIGN IN</Button>
      </form>
    </Fragment>
  )
}
export default Login;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& > p': {
      color: 'red',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 'auto',
    },
    '& button': {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#065683',
      color: 'white',
    },
    '& button:hover': {
      backgroundColor: 'white',
      color: '#065683',
      border: '.25em solid #065683'
    }
  },
}));
