import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, Container, Grid, Paper, Typography, TextField } from '@material-ui/core';
import Image from 'material-ui-image'

import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  content: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    direction: "column",
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: 600,
  },
  imagePaper: {
    width: 400,
  },
  detailsContainer: {
    alignItems: 'left',
    justifyContent: 'left',
    direction: "row"
  },
  detailsElement: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(0),
  },
  quantityField: {
    width: 69,
  },
}));

const Product = (props) => {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);

  return (
    <Container component="main" className={classes.content} maxWidth="md">
      <Grid container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
        spacing={1}
      >
        <Grid item md={8}>
          <Paper elevation={0}>
            <Container className={classes.imageContainer}>
              <Paper className={classes.imagePaper} elevation={0}>
                <Image
                  src={props.item.imgSrc}
                />
              </Paper>
            </Container>
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper elevation={0}>
            <Container className={classes.detailsContainer}>
              <Typography variant="subtitle1" align="left" color="textPrimary" gutterBottom>
                {props.item.title}
              </Typography>
              <Typography variant="subtitle1" align="left" color="textPrimary" gutterBottom>
                {props.item.price}
              </Typography>
              <ButtonGroup size="small">
                <Button
                  aria-label="reduce"
                  onClick={() => {
                    setCount(Math.max(count - 1, 0));
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <TextField
                  inputProps={{ min: 0, style: { textAlign: 'center' } }}
                  className={classes.quantityField}
                  size="small" id="outlined-basic"
                  placeholder={0}
                  value={count}
                  variant="outlined"
                  disabled

                />
                <Button
                  aria-label="increase"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </ButtonGroup>
              <Container className={classes.detailsElement}>
                <Button variant="contained" color="primary">
                  Add to Cart
                </Button>
              </Container>

            </Container>
          </Paper>
        </Grid>
      </Grid>


    </Container>
  );
}

export default Product;