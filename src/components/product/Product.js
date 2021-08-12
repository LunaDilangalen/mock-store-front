import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import Image from 'material-ui-image'

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
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: 1080,
    minHeigh: 500,
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  imageContainer: {
    width: 400,
    height: 400,
  }
}));

const Product = (props) => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.content} maxWidth="md">
      <Grid container>
        <Grid item container md={6}>
          <Paper className={classes.imageContainer}>
            <Image
              imageStyle={{ width: 300, height: 300 }}
              src={props.item.imgSrc}
            />
          </Paper>
        </Grid>
        <Grid item container md={6}>
          <Typography className={classes.accountSectionTitle} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
            {props.item.title}
          </Typography>
          <Typography className={classes.accountSectionTitle} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
            {props.item.price}
          </Typography>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </Grid>
      </Grid>


    </Container>
  );
}

export default Product;