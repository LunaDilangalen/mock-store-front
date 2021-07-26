import { AppBar, Box, Button, Container, Grid, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  }

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/mock-store-front/"
    },
    {
      menuTitle: "Shop",
      pageURL: "/mock-store-front/shop"
    },
    {
      menuTitle: "About",
      pageURL: "/mock-store-front/about"
    },
    {
      menuTitle: "My Cart",
      pageURL: "/mock-store-front/cart"
    },
    {
      menuTitle: "My Account",
      pageURL: "/mock-store-front/account"
    },
  ];


  return (
    <AppBar position="sticky" color='secondary'>
      <Toolbar>
        <Container maxWidth="md">
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Typography className={classes.typographyStyles} variant="h6" color="inherit" noWrap>
            CoffeeStore
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <React.Fragment>
              <Button color="inherit" onClick={() => handleButtonClick('/mock-store-front/')}>Home</Button>
              <Button color="inherit" onClick={() => handleButtonClick('/mock-store-front/shop')}>Shop</Button>
              <Button color="inherit" onClick={() => handleButtonClick('/mock-store-front/about')}>About Us</Button>
              <Box m={1}/>
              <IconButton color='inherit' onClick={() => handleButtonClick('/mock-store-front/cart')}>
                <ShoppingCartIcon />
              </IconButton>
              <IconButton color='inherit' onClick={() => handleButtonClick('/mock-store-front/account')}>
                <AccountCircleIcon />
              </IconButton>
            </React.Fragment>
          )}
          
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Header);
