import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, Typography } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import products from '../../mock_data/constants';

import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
  },
  cardMedia: {
    // paddingTop: '56.25%', // 16:9
    paddingTop: '60%'
  },
  cardContent: {
    flexGrow: 1,
    justifyContent: 'right'
  },
  latestTitle: {
    fontWeight: 600
  },
  seeShopButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
  }
}));

const Item = (props) => {
  const classes = useStyles();
  
  return (
    <Card className={classes.card} elevation={0}>
      <CardMedia
        className={classes.cardMedia}
        image={props.item.imgSrc}
        title={props.item.title}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="body1" component="h2">
          {props.item.title}
        </Typography>
        <Typography className={classes.latestTitle} variant="body2">
          {props.item.price}
        </Typography>
      </CardContent>
    </Card>
  );
}

const LatestContent = (props) => {
  const classes = useStyles();

  const handleButtonClick = (pageURL) => {
    props.history.push(pageURL);
  }

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Typography className={classes.latestTitle} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
        Pre-orders
      </Typography>
      <Grid container spacing={4}>
        {products.map((item, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <Item key={i} item={item}/>
          </Grid>
        ))}
      </Grid>
      <Container className={classes.seeShopButtonContainer}>
        <Button size="small" color="inherit" variant="outlined" onClick={() => handleButtonClick('/shop')}>
          See all products
        </Button>
      </Container>
    </Container>
  );
}

export default withRouter(LatestContent);