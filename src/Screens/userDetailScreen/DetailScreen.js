import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "./DetailScreen.css";
import kolachi from "../../assets/images/kolachi.jpeg";
import UserDetailTab from "./UserDetailTab";
import '../userDashboard/UserDashboard.css'
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
    display: "flex"
  },
});

class DetailScreen extends Component {
  constructor() {
    super();
    this.state = {
      top: false
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div class="userDetailMainDiv">
        <div className="resturntProfile">
          <img src={kolachi} alt="" />
          <div className=" resturntName">
            <h1>Kolachi-Clifton</h1>
          </div>
        </div>
        <UserDetailTab />

        <div className="container">
          <div className="searchDiv">
            <Paper className={classes.root} elevation={1}>
              {/* <Typography variant="h5" component="h3">
                  This is a sheet of paper.
                </Typography>
                <Typography component="p">
                  Paper can be used to build surface or other elements for your
                  application.
                </Typography> */}
              <TextField
                id="standard-name"
                label="Search By Resturents Name"
                className={classes.textField}
                value={this.state.name}
                fullWidth={true}
                variant="outlined"
                // onChange={this.handleChange("name")}
                margin="normal"
              />
              <div className="searchBtn">
                <span>
                  <i class="fas fa-search" />
                </span>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

DetailScreen.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailScreen);
