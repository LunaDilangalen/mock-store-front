import { Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';

import {
  FiCard,
  FiCardActions,
  FiCardContent,
  FiCardMedia
} from "../fullImageCard/FullImageCard";

import products from '../../mock_data/constants';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0, 0, 0, 0),
    // padding: theme.spacing(8, 0, 6),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  heroContentPaper: {
    backgroundColor: 'pink',
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
  featuredTitle: {
    fontWeight: 600
  }
}));

function FeaturedProducts(props) {
  return (
    <Carousel
      navButtonsAlwaysVisible
      navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          opacity: 0.4,
        }
      }}
      indicatorIconButtonProps={{
        style: {
          padding: '2px',
        }
      }}
      animation="slide"
    >
      {
        products.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

function Item(props) {
  const classes = useStyles();

  return (
    <FiCard className={classes.card} elevation={0}>
      <FiCardMedia
        media="picture"
        image={props.item.imgSrc}
        title={props.item.title}
      />
      <FiCardContent className={classes.fiCardContent}>
        <Typography className={classes.featuredTitle} gutterBottom variant="h5" component="h2">
          Featured Product
        </Typography>
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
  )
}


const FeaturedContent = (props) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // console.log("wtf {location.hash}");
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      console.log("wtf {location.hash}");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location,])

  return (
    <div id="featured-content">
      <Container className={classes.heroContent} maxWidth="xl">
        <FeaturedProducts />
      </Container>
    </div>
  );
}

export default FeaturedContent;