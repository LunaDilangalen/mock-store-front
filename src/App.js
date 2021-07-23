import './App.css';
import React from 'react';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Copyright from './components/home/Copyright';
import { CssBaseline } from '@material-ui/core';
import Cart from './components/cart/Cart';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  footer: {
    // padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        {/* <Home /> */}
        <Cart />
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </div>
    </React.Fragment>

  );
}

export default App;
