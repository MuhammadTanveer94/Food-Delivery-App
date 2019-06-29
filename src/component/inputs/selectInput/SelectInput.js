import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  input2: {
    height: 8,
    fontSize: "12px"
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class SelectInput extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'English US',
  };

  handleChange = name => event => {
    console.log(event.target.value)
    console.log(name)
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes, label, helperText, data, fullWidth=false, onChange } = this.props;
    console.log(data)
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
        // InputProps={{ classes: {  input: this.props.classes.input2} }}
          id="filled-select-currency-native"
          select
          label={label}
          className={classes.textField}
          value={this.state.currency}
          // onChange={this.handleChange('currency')}
          onChange={onChange}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          fullWidth={fullWidth}
          helperText={helperText}
          margin="normal"
          variant="outlined"
        >
          {data.length && data.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField> 

      </form>
    );
  }
}

SelectInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectInput);