import React, { Component } from "react";
import MaterialInput from "../../component/inputs/materialInput";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "../../component/buttons/bootstrapButton";
import kolachi from "../../assets/images/kolachi.jpeg";
import "./AdminProfile.css";

// import './UserProfile.css'

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
    marginBottom: theme.spacing.unit * 4
  }
});

class AdminProfile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div class="col-md-12">
        <div className="resturntProfile">
          <img src={kolachi} alt="" />
          <div className=" resturntName">
            <h1>Kolachi-Clifton</h1>
          </div>
        </div>
        <div class="col-md-6 col-md-offset-3 " style={{ margin: "auto" }}>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="h5" component="h3">
              My Profile
            </Typography>
          </Paper>

          <MaterialInput
            label="Resturent name"
            placeholder="Insert your resturent name."
            fullWidth={true}
            // onChange={e => this.handleInputChange(e, "name")}
          />

          <div className="inputFileField">
            <div className="btn">
              <span>Cover Photo</span>
              <input type="file" />
            </div>
            <div className="file-path-wrapper">
              <input
                class="file-path validate valid"
                type="text"
                placeholder="Cover Photo"
                value="Screenshot (135).png"
              />
            </div>
          </div>

          <div className="profileBtnDiv">
            <Button value="Save" classes="profileSaveBtn" />
            <Button value="Cancel" classes="profileCancelBtn" />
          </div>
        </div>
      </div>
    );
  }
}

AdminProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminProfile);
