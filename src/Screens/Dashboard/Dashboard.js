import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import "./Dashboard.css";
import { routes as userRoutes, pages as userPages } from "../User/routes";
import { routes as adminRoutes, pages as adminPages } from "../Admin/routes";
import UserTypes from "../../constants/userTypes";
import { Button } from "../../component/buttons/bootstrapButton";
import { signOut } from "../../config/firebase1";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null
    };
  }

  handleMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  onMenuItemClick = route => {
    this.handleClose();
    if (route.path === "Location") {
    } else {
      this.props.history.push(route.path);
    }
  };

  handleLogout = () => {
    signOut().then(() => {
      console.log("logged out");
      localStorage.clear();
      this.props.history.replace("/");
    });
  };

  render() {
    if (!JSON.parse(localStorage.isAuthenticated)) {
      return <Redirect to="/" />;
    }
    const userData = JSON.parse(localStorage.userData);
    console.log(userData);
    const routes = userData.type === UserTypes.ADMIN ? adminRoutes : userRoutes;
    const pages = userData.type === UserTypes.ADMIN ? adminPages : userPages;
    const { anchorEl } = this.state;
    return (
      <div>
        <div>
          <nav className="navbar">
            <span className="">Navbar</span>
            <span>
              <Button
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={this.handleMenuClick}
              >
                Name
                <span style={{ margin: "0px 0px 0px 10px" }}>
                  <i className="fas fa-caret-down" />
                </span>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                {pages.map((route, index) => {
                  return (
                    <MenuItem onClick={() => this.onMenuItemClick(route)}>
                      {route.name}
                    </MenuItem>
                  );
                })}
                <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
              </Menu>
            </span>
          </nav>
        </div>

        <Switch>
          {routes.map((routes, index) => {
            return (
              <Route
                key={index}
                exact={routes.exact}
                path={routes.path}
                name={routes.name}
                render={props => <routes.component {...props} />}
              />
            );
          })}
          <Redirect to="/dashboard" />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
