import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// import { AmplifySignOut } from '@aws-amplify/ui-react';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(10),
    direction: "column"
  },
  accountSectionTitle: {
    fontWeight: 600,
  },
}));

const Account = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.content} maxWidth="md">
      <Typography className={classes.accountSectionTitle} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
        My Account
      </Typography>
      {/* <Button>
        <AmplifySignOut color="inherit"/>
      </Button> */}
    </Container>
  );

}

export default Account;

