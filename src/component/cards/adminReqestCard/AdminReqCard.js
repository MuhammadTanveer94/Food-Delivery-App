import React, { Component } from "react";
import MaterialInput from "../../inputs/materialInput";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "../../buttons/bootstrapButton";
import './AdminReqCard.css'
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

class AdminReqCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div class="AdminReqCardMainDiv" style={{marginTop: "30px"}}>
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
                <h6>Burger</h6>
                <strong class="bq-title" />
                <strong>Rs:/-</strong>
              </blockquote>
            </div>
            <div class="three wide column justifyContent">
              <Button value="Approved" classes="approvedBtn" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AdminReqCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminReqCard);
