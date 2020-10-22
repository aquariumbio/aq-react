import React, { useState, useEffect, } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, Redirect, } from "react-router-dom";
import axios from "axios";

export default function Logout(props) {
  const classes = useStyles();
  let history = useHistory();

  const [ logOutErrors, setLoginOutError ] = useState();
  const [ logout, setlogout ] = useState(false);

  useEffect(() => {
    if (logout && !logOutErrors !== "") {
      // storetoken in local storage to keep user logged in between page refreshes
      localStorage.clear('token');
    }
  });

  const handleSignOut = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');

    axios
    .post(
      `http://localhost:3000/api/v3/user/sign_out?token=${token}`
    )
    .then(response => {
      if (response.data.status === 200) {
        setlogout(true);
        history.push("/login");
        window.location.reload();
      }

      if (response.data.status !== 200) {
        return setLoginOutError(response.data.error)
      }
    })
  }
  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }
  return (
    <Button name="sign_out"
            type="button"
            className={classes.root}
            onClick={handleSignOut}>
      SIGN OUT
    </Button>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
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