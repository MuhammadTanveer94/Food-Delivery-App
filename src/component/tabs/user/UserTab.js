import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import './UserTab.css'

const styles = {
  root: {
    flexGrow: 1
  },
  indicator: {
    backgroundColor: 'teal',
  },
};

class UserTab extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
    // this.props.handleChange(value)
    // console.log(value)
  };

  render() {
    const { classes } = this.props;
    // console.log(value);
    return (
      <Paper className={classes.root} style={{ flexShrink: 1 }}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          classes={{
            indicator: classes.indicator
          }}>
        >
          <Tab label="Restaurents" />
          <Tab label="My Requests" />        
        </Tabs>
      </Paper>
    );
  }
}

UserTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserTab);
