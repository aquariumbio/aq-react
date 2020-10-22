import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const TopLeftHamburgerMenu = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(false);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton edge="start" 
                  className={classes.menuButton} 
                  color="inherit" aria-label="menu" 
                  aria-controls="App-main-menu" 
                  aria-haspopup="true" 
                  onClick={handleClick}>
        <MenuIcon/>
      </IconButton>
      <Menu id="App-main-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
        <MenuItem onClick={handleClose}>Direct Purchasae</MenuItem>
        <MenuItem onClick={handleClose}>Logs</MenuItem>
        <MenuItem onClick={handleClose}>Users</MenuItem>
        <MenuItem onClick={handleClose}>Groups</MenuItem>
        <MenuItem onClick={handleClose}>Announcements</MenuItem>
        <MenuItem onClick={handleClose}>Budgets</MenuItem>
        <MenuItem onClick={handleClose}>Invoices</MenuItem>
        <MenuItem onClick={handleClose}>Parameters</MenuItem>
        <MenuItem onClick={handleClose}>Sample Type Definitions</MenuItem>
        <MenuItem onClick={handleClose}>Containers</MenuItem>
        <MenuItem onClick={handleClose}>Location Wizards</MenuItem>
        <MenuItem onClick={handleClose}>Import Workflows</MenuItem>
        <MenuItem onClick={handleClose}>Export Workflows</MenuItem>
        <MenuItem onClick={handleClose}>Help</MenuItem>
      </Menu>
    </>
  );
}

export default TopLeftHamburgerMenu;
