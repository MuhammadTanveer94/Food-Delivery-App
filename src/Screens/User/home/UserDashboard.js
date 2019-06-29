import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import { UserTab } from "../../../component/tabs/user";
import "./UserDashboard.css";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { userDashCard } from "../../../component/cards/userDashBoardCard";
import { UserProfile } from "../profile";
import { MapControl } from "../../../component/map";
import { FooterPage } from "../../../component/footer";
import UserRequestTab from "../request/UserRequestTab";
import UserRequest from "../request/UserRequest";
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
    display: "flex"
  },
  chip: {
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 2,
    backgroundColor: "teal",
    color: "white",
    cursor: "pointer"
  }
});

class UserDash extends Component {
  constructor(props) {
    super();
    this.state = {
      cardData: [
        "Fast Food",
        "Fast Food",
        "Fast Food",
        "Fast Food",
        "Fast Food",
        "Fast Food",
        "Fast Food"
      ],
      isProfileActive: false,
      mapOpen: false,
      top: false
    };
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = key => {
    if (key === "profile") {
      console.log("profile");
      this.setState({ isProfileActive: true });
    } else if (key === "location") {
      this.setState({ top: true });
    }
    this.setState({ anchorEl: null });
  };

  toggleDrawer = (side, open) => {
    console.log("map");
    this.setState({
      top: open
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, cardData, isProfileActive, mapOpen } = this.state;
    return (
      <div>
        <div>
          <nav class="navbar">
            <span class="">Navbar</span>
            <span>
              <Button
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
                // className={classes.margin}
              >
                Name
                <span style={{ margin: "0px 0px 0px 10px" }}>
                  <i class="fas fa-caret-down" />
                </span>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={() => this.handleClose("profile")}>
                  Profile
                </MenuItem>
                <MenuItem onClick={() => this.handleClose("location")}>
                  My location
                </MenuItem>
                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
              </Menu>
            </span>
          </nav>
        </div>
        <UserTab />

        {!isProfileActive && (
          <div className="container">
            <div className="searchDiv">
              <Paper className={classes.root} elevation={1}>
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

            <div className="chipDiv">
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
            </div>

            <div className="foodCardsDiv">
              {cardData.map(name => {
                return (
                  <div
                    class="card card-cascade  wider userFoodCard"
                    style={{ width: "280px" }}
                  >
                    <div
                      class="view view-cascade overlay"
                      style={{ width: "240px", margin: "auto" }}
                    >
                      <img
                        class="card-img-top"
                        src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
                        alt="Card image cap"
                      />
                      <a>
                        <div class="mask rgba-white-slight" />
                      </a>
                    </div>

                    <div class="card-body card-body-cascade userFoodCategory">
                      <h4 class="font-weight-bold card-title">
                        Cheat day inspirations
                      </h4>

                      <h5 class="pink-text pb-2 pt-1">
                        <i class="fas fa-utensils" /> {name}
                      </h5>

                      <p class="card-text">
                        Ut enim ad minima veniam, quis nostrum exercitationem
                        ullam corporis suscipit laboriosam, nisi ut aliquid ex
                        ea commodi.
                      </p>

                      <a
                        class="btn "
                        style={{ color: "white", backgroundColor: "teal" }}
                      >
                        Button
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {isProfileActive && <UserProfile />}

        {/* <MapControl drawerOpen={mapOpen} /> */}

        <SwipeableDrawer
          anchor="top"
          open={this.state.top}
          onClose={() => this.toggleDrawer("top", false)}
          onOpen={() => this.toggleDrawer("top", true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.toggleDrawer("top", false)}
            onKeyDown={() => this.toggleDrawer("top", false)}
          >
            <div className="chipDiv">
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
              <Chip label="Basic Chip" className={classes.chip} />
            </div>
          </div>
        </SwipeableDrawer>

        {/* <UserRequest /> */}

        {/* <FooterPage /> */}
      </div>
    );
  }
}

UserDash.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserDash);
