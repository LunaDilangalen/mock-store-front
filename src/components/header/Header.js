import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginLeft: theme.spacing(2),
  },
  typographyStyles: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color='primary'>
      <Toolbar>
        <Typography className={classes.typographyStyles} variant="h6" color="inherit" noWrap>
          CoffeeStore
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Latest</Button>
        <Button color="inherit">Products</Button>
        <Button color="inherit">About Us</Button>
        <ShoppingCartIcon className={classes.icon} />
        <AccountCircleIcon className={classes.icon} />

      </Toolbar>
    </AppBar>
  );
}

export default Header;
