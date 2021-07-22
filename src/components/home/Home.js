import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../header/Header';
import FeaturedContent from './FeaturedContent';
import LatestContent from './LatestContent';
import Copyright from './Copyright';
import About from './About';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero unit */}
        <FeaturedContent />
        <LatestContent />
      </main>
      {/* Footer */}
      <About />
      <Copyright />
      
      {/* End footer */}
    </React.Fragment>
  );
}

export default Home;