import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, IconButton, Typography } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import products from '../../mock_data/constants';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
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
  }
}));

const Item = (props) => {
  const classes = useStyles();
  
  return (
    <Card className={classes.card} elevation={1}>
      <CardMedia
        className={classes.cardMedia}
        image={props.item.imgSrc}
        title={props.item.title}
      />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.latestTitle} gutterBottom variant="body1" component="h2">
          {props.item.title}
        </Typography>
        <Typography variant="body2">
          {props.item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton size="small">
          <FavoriteBorderIcon size="small" />
        </IconButton>
        <IconButton size="small">
          <AddShoppingCartIcon size="small" />
      </IconButton>
      </CardActions>
    </Card>
  );
}

const LatestContent = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Typography className={classes.latestTitle} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
        Latest Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((item, i) => (
          <Grid item key={i} xs={12} sm={6} md={4}>
            <Item key={i} item={item}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default LatestContent;