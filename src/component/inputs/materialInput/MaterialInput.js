import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
// import "./LabelInput.css";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  input2: {
    height: 8,
    fontSize: "12px"
  },
  input3: {
    height: "auto",
    fontSize: "14px"
  }
  // labelRoot: {
  //   fontSize: 50
  // }
});

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

class MaterialInput extends React.Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const {
      classes,
      label,
      placeholder,
      fullWidth,
      rows = null,
      multiline = false,
      type = undefined,
      InputProps,
      className,
      onChange
    } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        {/* <TextField
          id="filled-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="filled"
        /> */}
        <TextField
          InputProps={{ classes: {  input: this.props.classes.input2} }}
          // InputLabelProps={{
          //   FormLabelClasses: {
          //     root: classes.labelRoot
          //   }
          // }}
          id="filled-full-width"
          label={label}
          style={{ margin: 8 }}
          placeholder={placeholder}
          multiline={multiline}
          rows={rows}
          className={className}
          //   helperText="Full width!"
          fullWidth={fullWidth}
          margin="normal"
          variant="outlined"
          type={type}
          InputLabelProps={{
            shrink: true
          }}
          onChange={onChange}
        />
      </form>
    );
  }
}

MaterialInput.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MaterialInput);
