import './App.css';
import React from 'react';
import Home from './components/home/Home';
import Account from './components/account/Account';
import Header from './components/header/Header';
import Copyright from './components/copyright/Copyright';
import { CssBaseline } from '@material-ui/core';
import Cart from './components/cart/Cart';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';

// import { withAuthenticator } from '@aws-amplify/ui-react';

const config = require('./config.json');

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
  const rootUrl = config['root-url'];

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
          <Switch>
          console.log(props.history)
            <Route exact path={rootUrl + "/"} component={Home}/>
            <Route exact path={rootUrl + "/cart"} component={Cart}/>
            <Route exact path={rootUrl + "/account"} component={Account}/>
          </Switch>
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </div>
    </React.Fragment>

  );
}

// export default withAuthenticator(App);
export default App;