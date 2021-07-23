import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Copyright from '../home/Copyright';
import Paper from '@material-ui/core/Paper';
import CartItem from './CartItem';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    // padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  cartItemsTitle: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  },
  
}));

const cartItems = [1, 2]

export default function Cart() {
  const classes = useStyles();
  const randomNumber = 2;

  return (
    <Container component="main" className={classes.content} maxWidth="md">
      <Typography variant="h2" component="h1" gutterBottom>
        My Cart
      </Typography>
      <Paper>
        <Container className={classes.cartItemsTitle}>
          <Typography variant="h5" component="h2" gutterBottom>
            Cart Items ({randomNumber})
          </Typography>
          
          {cartItems.map((cartItem, i) => (
            <CartItem className={classes.cartItemCard} key={i} item={cartItems} />
          ))}
          
        </Container>
      </Paper>
    </Container>
  );
}