import React, { Component } from "react";

// const styles={
//     padding:'10px',
//     marginTop:'10px',
//     marginRight: '20px',
//     borderRadius: '50%',
//     marginLeft: '10px',
//     color: '#A4AAB6'
// }

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      btnType = "light",
      classes = null,
      value = null,
      icon = null,
      id,
      onClick,
      onMouseEnter,
      onMouseLeave,
      to
    } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={onClick} 
          value = {value}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave} id={id}
          className={`btn btn-${btnType} ${classes}`}
          aria-label={to}
        >
          {" "}
          <span>{icon}</span>
          {value}
        </button>
      </div>
    );
  }
}
