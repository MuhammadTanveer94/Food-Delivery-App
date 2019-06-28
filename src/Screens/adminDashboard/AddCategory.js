import React, { Component } from "react";
import MaterialInput from "../../component/inputs/materialInput";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {Button} from '../../component/buttons/bootstrapButton'
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

class AddCategory extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleInputChange = () => {

  }

  render() {
    const { classes } = this.props;
    return (
      <div class="col-md-12">
        <div class="col-md-6 col-md-offset-3 " style={{margin: "auto"}}>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="h5" component="h3">
              Add  Category
            </Typography>
          </Paper>

          <MaterialInput
            label="Name"
            placeholder="Insert your email."
            fullWidth={true}
            onChange={e => this.handleInputChange(e, "name")}
          />



          <div className="profileBtnDiv">
          <Button value="Add Food Category" classes="profileSaveBtn"/>
          <Button value="Cancel" classes="profileCancelBtn"/>
          </div>
          
        </div>
      </div>
    );
  }
}

AddCategory.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddCategory);
