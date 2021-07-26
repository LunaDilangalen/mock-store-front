import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import CartItem from './CartItem';
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(10),
    direction: "column"
  },
  footer: {
    // padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  cartPaperStyle: {
    backgroundColor: theme.palette.primary,
  },
  cartSectionTitle: {
    fontWeight: 600,
  },
  cartItemsContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(0),
  },
  cartSummaryContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(0),
    paddingBottom: theme.spacing(2),
  },
  cartSummaryDetails: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(0),
  },
  cartTotal: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(0),
  }
}));

const cartItems = [1, 2, 3, 4, 5]

export default function Cart() {
  const classes = useStyles();
  const randomNumber = cartItems.length;

  return (
    <Container component="main" className={classes.content} maxWidth="md">
      {/* <Typography variant="h2" component="h1" gutterBottom> */}
      <Typography className={classes.cartSectionTitle} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
        My Cart
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Cart Items ({randomNumber})
      </Typography>
      <Grid container>
        <Grid item md={8} sm={12} xs={12}>
          {/* <Paper elevation={4}> */}
          <Container className={classes.cartItemsContainer}>
            <Grid container spacing={2}>
              {/* Cart Items Layout */}
              {cartItems.map((cartItem, i) => (
                <Grid item md={12} sm={12} xs={12}>
                  <CartItem className={classes.cartItemCard} key={i} item={cartItems} />
                </Grid>
              ))}
            </Grid>
          </Container>
          {/* </Paper> */}
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          {/* <Paper elevation={3}> */}
            <Container className={classes.cartSummaryContainer}>
              <Typography variant="h6">
                Cart Summary
              </Typography>
              <Container className={classes.cartSummaryDetails}>
                <Grid container direction="row" spacing={1}>
                  <Grid item container justifyContent="space-between" >
                    <Grid item>
                      <Typography variant="body2" color="textSecondary">
                        Subtotal  
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" color="textSecondary">
                        PHP 999999.99  
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="body2" color="textSecondary">
                        Shipping  
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" color="textSecondary">
                        - 
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid> 
              </Container>
              <Container className={classes.cartTotal}>
                <Grid container className={classes.cartTotal} justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h6">
                      Total
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      PHP 999999.99
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
              <Container className={classes.cartTotal}>
                <Button fullWidth variant="contained" color="primary">
                  Checkout
                </Button>
              </Container>
            </Container>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </Container>
  );
}