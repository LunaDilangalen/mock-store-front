import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(2)
  },
  playIcon: {
    height: 38,
    width: 38
  },
}));

const CartItem = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root} variant="outlined" elevation={0}>
      <CardMedia
        className={classes.cover}
        image="https://source.unsplash.com/random"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h6">
            Product Name
          </Typography>
          <Typography variant="body2" color="textSecondary">
            PHP 9999.99
          </Typography>
        </CardContent>
        <Grid container className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Grid>
      </div>
    </Card>
  );
}

export default CartItem