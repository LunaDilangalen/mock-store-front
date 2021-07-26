import { AppBar, Box, Button, Container, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
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
    <AppBar position="sticky" color='secondary'>
      <Toolbar>
        <Container maxWidth="md">
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Typography className={classes.typographyStyles} variant="h6" color="inherit" noWrap>
            CoffeeStore
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Latest</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">About Us</Button>
          <Box m={1}/>
          <IconButton color='inherit'>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color='inherit'>
            <AccountCircleIcon />
          </IconButton>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
