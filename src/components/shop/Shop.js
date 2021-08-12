import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, CardActionArea, Container, Grid, Modal, Tab, Tabs, Typography } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import products from '../../mock_data/constants';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import Cart from '../cart/Cart';
import Product from '../product/Product';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  cardGrid: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(4),
    minHeight: "100vh",
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
  shopTitle: {
    fontWeight: 600
  },
  paginationControls: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(2),
  },
  modalPaper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 1080,
    minHeigh: 500,
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Item = (props) => {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (item) => {
    return (
      <div style={modalStyle} className={classes.modalPaper}>
        <Product item={item} />
      </div>
    );
  }

  return (
    <Card className={classes.card} elevation={0}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          className={classes.cardMedia}
          image={props.item.imgSrc}
          title={props.item.title}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="body1" component="h2">
            {props.item.title}
          </Typography>
          <Typography className={classes.shopTitle} variant="body2">
            {props.item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body(props.item)}
      </Modal>
    </Card>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        // <Box p={3}>
        //   <Typography>{children}</Typography>
        // </Box>

        <Box p={3}>
          {children}
        </Box>

      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Shop = () => {
  const classes = useStyles();

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div id="shop">
      <Container className={classes.cardGrid} maxWidth="lg">
        <Typography className={classes.shopTitle} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
          Shop
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="full width tabs example"
        >
          <Tab label="Pre-orders" {...a11yProps(0)} />
          <Tab label="On-hands" {...a11yProps(1)} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Grid container spacing={4}>
              {products.map((item, i) => (
                <Grid item key={i} xs={6} sm={6} md={4}>
                  <Item key={i} item={item} />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Grid container spacing={4}>
              {products.map((item, i) => (
                <Grid item key={i} xs={6} sm={6} md={4}>
                  <Item key={i} item={item} />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </SwipeableViews>
      </Container>
    </div>
  );
}

export default Shop;