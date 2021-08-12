import { AppBar, Box, Button, Container, Grid, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  typographyStyles: {
    flex: 1,
  },
  linkStyles : { 
    textDecoration: 'none',
    color: theme.palette.text.primary, 
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
      menuTitle: "My Cart",
      pageURL: "/cart"
    },
    {
      menuTitle: "My Account",
      pageURL: "/account"
    },
  ];

  const homeItems = [
    {
      menuTitle: "Home",
      pageURL: "/"
    },
    {
      menuTitle: "Shop",
      pageURL: "/#shop"
    },
    {
      menuTitle: "About",
      pageURL: "/#about"
    },
  ]

  const config = require('../../config.json');
  const rootUrl = config['root-url'];


  return (
    <AppBar id="header" position="sticky" color='secondary'>
      <Toolbar>
        <Container maxWidth="lg">
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
                  {homeItems.map(menuItem => {
                    const { menuTitle, pageURL } = menuItem;
                    return (
                      <Link className={classes.linkStyles} to={pageURL}  color="inherit" >
                        <MenuItem color="primary">
                          {menuTitle}
                        </MenuItem>
                      </Link>
                    );
                  })}
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
                <Link className={classes.linkStyles} to={rootUrl + "/"} >
                  <Button color="primary" >Home</Button>
                </Link>
                <Link className={classes.linkStyles} to={rootUrl + "/#shop"}>
                  <Button color="primary" >Shop</Button>
                </Link>
                <Link className={classes.linkStyles} to={rootUrl + "/#about"}>
                  <Button color="primary" >About Us</Button>
                </Link>
                <Box m={1} />
                <IconButton color='inherit' onClick={() => handleButtonClick(rootUrl + '/cart')}>
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton color='inherit' onClick={() => handleButtonClick(rootUrl + '/account')}>
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
