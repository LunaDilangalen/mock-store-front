import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, ButtonGroup, TextField} from "@material-ui/core";

// material icons
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.default,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  quantityModifier: {
    flex: '1 0 auto',
    justifyContent: "center",
    // backgroundColor: 'pink'
  },
  content: {
    flex: '1 0 auto',
    // backgroundColor: 'yellow'
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  quantityField: {
    width: 40,
  },
  cardActionTypography: {
    fontSize: 10,
  }
}));

const CartItem = () => {
  const classes = useStyles();
  // const theme = useTheme();
  const [count, setCount] = React.useState(1);

  return (
    <Card className={classes.root} elevation={0}>
      <CardMedia
        className={classes.cover}
        image="https://source.unsplash.com/random"
        title="Product Image Title"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            Long Product Name
          </Typography>
          <Typography variant="body2" color="textSecondary">
            PHP 9999.99
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Button size="small" aria-label="next">
            <DeleteIcon fontSize="small"/>
            <Typography className={classes.cardActionTypography} variant="caption">
              Remove from cart
            </Typography>
          </Button>
        </div>
      </div>
      <div className={classes.details}>
      <CardContent className={classes.quantityModifier}>
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
            inputProps={{min: 0, style: { textAlign: 'center' }}}
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
        </CardContent>
      </div>
    </Card>
  );
}

export default CartItem