import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import kolachi from "../../assets/images/kolachi.jpeg";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import UserRequestTab from "./UserRequestTab";
import './UserRequest.css'
import {Button} from '../../../component/buttons/bootstrapButton'
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
  categoryTab: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    width: "auto",
    display: "flex",
    justifyContent: "center"
  }
});

class UserRequest extends Component {
  constructor() {
    super();
    this.state = {
      top: false
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div class="">
        <UserRequestTab />
        <div className="container" style={{margin: "30px auto"}}>
          {/* <div className="ui celled grid">
            <div className="row">
              <div className="three wide column">
                <img src="" alt="" />
              </div>

              <div className="ten wide column">
                <blockquote className="blockquote bq-primary" />
              </div>
            </div>
          </div> */}

          <div class="ui celled grid">
            <div class="row">
              <div class="three wide column">
                <img
                  src="https://www.aprettylifeinthesuburbs.com/wp-content/uploads/2018/06/Sweet-Sticky-BBQ-Turkey-Legs-7.jpg"
                  class="ui image"
                />
              </div>
              <div class="ten wide column">
                <blockquote class="blockquote bq-primary">
                  <h2>
                    <a href="/individualFood">
                      Sweet &amp; Sticky BBQ Turkey Legs
                    </a>
                  </h2>
                  <h6>
                      Burger
                  </h6>
                  <strong class="bq-title" />
                  <strong>Rs:/-</strong>
                </blockquote>
              </div>
              <div class="three wide column justifyContent">
                <Button value="Approved" classes="approvedBtn"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserRequest.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserRequest);
