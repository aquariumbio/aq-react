import React from 'react';
import Logout from './Logout';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const User = (props) => {
  return ( 
    <>
      <Paper elevation={3}>
        <Typography variant="h1">User</Typography>
        <Logout/>
      </Paper>
    </>
   );
}
 
export default User;