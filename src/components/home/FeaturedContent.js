import { Button, Container, CssBaseline, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

import {
  FiCard,
  FiCardActionArea,
  FiCardActions,
  FiCardContent,
  FiCardMedia
} from "./FullImageCard";

import products from '../../mock_data/constants';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  media: {
    height: 140
  },
  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)",
    paddingTop: theme.spacing(5),
  },
  fiCardActions: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.24)",
    paddingTop: theme.spacing(30),
    paddingBottom: theme.spacing(4),
    justifyContent: 'center'
  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)"
  },
}));

function FeaturedProducts(props) {
  return (
    <Carousel>
      {
        products.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

function Item(props) {
  const classes = useStyles();

  return (
    <Paper variant="outlined">
      <FiCard className={classes.card}>
        <FiCardMedia
          media="picture"
          alt="Contemplative Reptile"
          image={props.item.imgSrc}
          title={props.item.title}
        />
        <FiCardContent className={classes.fiCardContent}>
          <Typography gutterBottom variant="h3" component="h2">
            {props.item.title}
          </Typography>
          <Typography
            variant="h4"
            className={classes.fiCardContentTextSecondary}
            component="p"
          >
            {props.item.price}
          </Typography>
        </FiCardContent>
        <FiCardActions className={classes.fiCardActions}>
          <Button size="small" color="inherit" variant="outlined">
            Check it out!
          </Button>
        </FiCardActions>
      </FiCard>
    </Paper>
  )
}


const FeaturedContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="lg">
        <FeaturedProducts />
    </Container>
    </div>
    
  );
}

export default FeaturedContent;