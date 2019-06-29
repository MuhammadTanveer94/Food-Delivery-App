import React, { Component } from "react";

import "./Dashboard.css";

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

  render() {
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
                <MenuItem onClick={() => this.handleClose()}>Profile</MenuItem>
                <MenuItem onClick={() => this.handleClose()}>
                  Set Location
                </MenuItem>
                <MenuItem onClick={() => this.handleClose()}>
                  Add Category
                </MenuItem>
                <MenuItem onClick={() => this.handleClose()}>Add Item</MenuItem>
                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
              </Menu>
            </span>
          </nav>
        </div>
      </div>
    );
  }
}
