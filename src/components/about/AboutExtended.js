import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({

  content: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(0),
    paddingBottom: theme.spacing(4),
    direction: "column",
    backgroundColor: "#c1c1c1"
  },
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    direction: "column",
    backgroundColor: "#c1c1c1"
  },
  aboutSectionTitle: {
    fontWeight: 600,
  },
}));

const AboutExtended = () => {
  const classes = useStyles();

  return (
    <div id="about" className={classes.content}>
      <Container component="main" className={classes.container} maxWidth="lg">
      <Typography className={classes.aboutSectionTitle} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
        About CoffeeStore
      </Typography>
      <Typography variant="subtitle1" align="left" color="textSecondary" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor semper dictum. Aliquam vel dui lectus. Curabitur ornare nunc a ex consequat maximus. Vestibulum elit ligula, egestas sed lectus quis, faucibus viverra odio. In interdum commodo eros ac vehicula. Praesent et urna ultrices, venenatis justo at, molestie lacus. Morbi a enim lacus. Aenean accumsan malesuada felis vitae aliquet. Vivamus venenatis dolor nec velit ultrices posuere. 
      </Typography>
      </Container>
    </div>
  );
  
}

export default AboutExtended;