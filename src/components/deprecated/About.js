import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  about: {
    backgroundColor: "#c1c1c1",
    padding: theme.spacing(6),
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.about}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          About CoffeeStore
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor semper dictum. Aliquam vel dui lectus. Curabitur ornare nunc a ex consequat maximus. Vestibulum elit ligula, egestas sed lectus quis, faucibus viverra odio. In interdum commodo eros ac vehicula. Praesent et urna ultrices, venenatis justo at, molestie lacus. Morbi a enim lacus. Aenean accumsan malesuada felis vitae aliquet. Vivamus venenatis dolor nec velit ultrices posuere. 
        </Typography>
      </Container>
    </div>
  );
}

export default About;