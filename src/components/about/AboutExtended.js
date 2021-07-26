import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(10),
    direction: "column"
  },
  aboutSectionTitle: {
    fontWeight: 600,
  },
}));

const AboutExtended = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.content} maxWidth="md">
      <Typography className={classes.aboutSectionTitle} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
        About CoffeeStore
      </Typography>
    </Container>
  );
  
}

export default AboutExtended;