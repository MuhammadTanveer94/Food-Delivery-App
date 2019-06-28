import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import { AdminTab } from "../../component/tabs/admin";
import "./AdminDash.css";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
// import { userDashCard } from "../../component/cards/userDashBoardCard";
// import { UserProfile } from "../profile";
// import { MapControl } from "../../component/map";
import AdminProfile from "./AdminProfile";
import AddCategory from "./AddCategory";
import AddItem from "./AddItem";
import { AdminReqCard } from "../../component/cards/adminReqestCard";
import { FooterPage } from "../../component/footer";

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

class AdminDash extends Component {
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
      isDashBoardActive: true,
      isProfileActive: false,
      isLocationActive: false,
      isAddCategoryActive: false,
      isAddItemActive: false,
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
      this.setState({
        anchorEl: null,
        isDashBoardActive: false,
        isProfileActive: true,
        top: false,
        isAddCategoryActive: false,
        isAddItemActive: false
      });
    } else if (key === "setLocation") {
      this.setState({
        anchorEl: null,
        isDashBoardActive: false,
        isProfileActive: false,
        top: true,
        isAddCategoryActive: false,
        isAddItemActive: false
      });
    } else if (key === "addCategory") {
      this.setState({
        anchorEl: null,
        isDashBoardActive: false,
        isProfileActive: false,
        top: false,
        isAddCategoryActive: true,
        isAddItemActive: false
      });
    } else if (key === "addItem") {
      this.setState({   anchorEl: null,
        isDashBoardActive: false,
        isProfileActive: false,
        top: false,
        isAddCategoryActive: false,
        isAddItemActive: true });
    } else if (key === "location") {
      this.setState({ anchorEl: null, top: true });
    }
  };

  toggleDrawer = (side, open) => {
    console.log("map");
    this.setState({
      top: open
    });
  };

  render() {
    const { classes } = this.props;
    const {
      anchorEl,
      cardData,
      isProfileActive,
      mapOpen,
      isDashBoardActive,
      isAddCategoryActive,
      isAddItemActive
    } = this.state;
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
                <MenuItem onClick={() => this.handleClose("setLocation")}>
                  Set Location
                </MenuItem>
                <MenuItem onClick={() => this.handleClose("addCategory")}>
                  Add Category
                </MenuItem>
                <MenuItem onClick={() => this.handleClose("addItem")}>
                  Add Item
                </MenuItem>
                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
              </Menu>
            </span>
          </nav>
        </div>

        {isDashBoardActive && (
          <div>
            <AdminTab />

            <div className="container" style={{ margin: "50px auto 0px auto" }}>
              <AdminReqCard />
              <AdminReqCard />
              <AdminReqCard />
            </div>
            <div className="footerDiiv" style={{ marginTop: "40px" }}>
              <FooterPage />
            </div>
          </div>
        )}

        {isProfileActive && <AdminProfile />}

        {isAddCategoryActive && <AddCategory />}
        {isAddItemActive && <AddItem />}
        {/* <AdminTab /> */}

        {/* <AdminProfile /> */}
        {/* <AddCategory /> */}
        {/*  */}

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

        {/* <FooterPage /> */}
      </div>
    );
  }
}

AdminDash.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminDash);
