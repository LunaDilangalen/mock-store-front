import React from 'react';
import { Container, Grid, IconButton, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  copyright: {
    backgroundColor: "#3d3d3d",
  },
  copyrightType: {
    color: "#fffffe"
  }
}));

const Copyright = () => {
  const classes = useStyles();

  return (
    <div className={classes.copyright}>
      <Container maxWidth='md'>
        <Grid container alignItems='center' spacing={0}>
          <Grid item md={8}>
            <Typography className={classes.copyrightType} variant="body2" color="textSecondary" >
              {'Copyright © '}
              <Link color="inherit" href="https://material-ui.com/">
                CoffeeStore
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Grid>
          <Grid item container md={4} justifyContent='flex-end'>
            <Grid item>
              <IconButton>
                <MailIcon className={classes.copyrightType}/>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <TwitterIcon className={classes.copyrightType}/>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Copyright;