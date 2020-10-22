import axios from "axios";

// API functions

const signIn = (login, password, setLoginError) => {
  axios
  .post(
    `http://localhost:3000/api/v3/user/sign_in?login=${login}&password=${password}`
  )
  .then(response => {
    if (response.data.status === 200 && response.data.data.token) {
      //TODO: write function >> this.props.handleSuccessfulLogin(response.data);
      setLoginError()
      // storetoken in local storage to keep user logged in between page refreshes
      localStorage.setItem('token', response.data.data.token);
      return localStorage.getItem('token')
    }

    if (response.data.status !== 200) {
      return setLoginError(response.data.error)
    }
  });
}

const signOut = () => {
  const token = localStorage.getItem('token');

  axios
  .post(
    `http://localhost:3000/api/v3/user/sign_out?token=${token}`
  )
  .then(response => {
    if (response.data.status === 200) {
      // remove user from local storage to log user out
      return localStorage.removeItem('token');
    }

    if (response.data.status !== 200) {
      return (response.data.error)
    }
  })
}

const validateToken = () => {
  const token = localStorage.getItem('token');

  axios
  .post(
    `http://localhost:3000/api/v3/user/test_token?token=${token}`
  )
  .then(response => {
    if (response.data.status === 200) {
      console.log("valid token")
    }

    if (response.data.status !== 200) {
      return localStorage.removeItem('token');
    }
  })
}

export default {signIn, signOut, validateToken}