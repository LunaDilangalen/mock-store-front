import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Carousel from 'react-material-ui-carousel';
import Paper from '@material-ui/core/Paper';

function Example(props) {
  var items = [
    {
      name: "Featured Product #1",
      description: "PLACE IMAGE HERE! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor lobortis erat, tempor mollis eros varius egestas. Sed eu viverra sapien. Fusce felis odio, pretium id fringilla quis, dapibus nec lacus. "
    },
    {
      name: "Featured Product #2",
      description: "PLACE IMAGE HERE! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor lobortis erat, tempor mollis eros varius egestas. Sed eu viverra sapien. Fusce felis odio, pretium id fringilla quis, dapibus nec lacus. "
    },
    {
      name: "Featured Product #3",
      description: "PLACE IMAGE HERE! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor lobortis erat, tempor mollis eros varius egestas. Sed eu viverra sapien. Fusce felis odio, pretium id fringilla quis, dapibus nec lacus. "
    },
    {
      name: "Featured Product #4",
      description: "PLACE IMAGE HERE! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor lobortis erat, tempor mollis eros varius egestas. Sed eu viverra sapien. Fusce felis odio, pretium id fringilla quis, dapibus nec lacus. "
    },
    {
      name: "Featured Product #5",
      description: "PLACE IMAGE HERE! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor lobortis erat, tempor mollis eros varius egestas. Sed eu viverra sapien. Fusce felis odio, pretium id fringilla quis, dapibus nec lacus. "
    },
  ]

  return (
    <Carousel>
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

function Item(props) {
  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
       {props.item.name}
      </Typography> 
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        {props.item.description}
      </Typography>
      <div marginTop="5">
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" color="primary">
              Check it out
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container> 
  )
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        SeoulStream
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
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
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            CHanges From UbUnTu
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          {/* <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Featured Page Here
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Insert Featured Product Descriptions Here + Price              
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Check it out
                  </Button>
                </Grid>
              </Grid>
            </div>   
          </Container> */}
          <Example />
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
            Latest Products
          </Typography>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="subtitle1" align="left">
                      Product Title
                    </Typography>
                    <Typography variant="h6" align="left">
                      9999.99 PhP
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor lobortis erat, tempor mollis eros varius egestas. Sed eu viverra sapien. Fusce felis odio, pretium id fringilla quis, dapibus nec lacus.
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}