

import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Grid,
  Paper
} from "@material-ui/core";
import { Activity } from "../profile";

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
        <Box p={3}>
          <Typography>{children}</Typography>
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
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    height: 500,
    flexGrow: 1,
  },
}));

export const ProfileCard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    // <div className={classes.root}>
     <Grid container spacing={3}>
        <Grid item xs={30}>
          <Paper className={classes.paper}>
      <AppBar position="static" color="transparant">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs "
        >
          <Tab label="My Activity" {...a11yProps(0)} />
          <Tab label="My Content" {...a11yProps(1)} />
          <Tab label="Friends" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Activity />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Activity />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Activity />
        </TabPanel>
      </SwipeableViews>
      </Paper>
      </Grid>
      </Grid>
    // </div>
  );
};
