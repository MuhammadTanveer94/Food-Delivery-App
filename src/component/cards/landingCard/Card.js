import React, { Component } from "react";
import "../../../App.css";
//import Auth from './Component/Authentication';

class Card extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="card usa">
        {/* <img className="card-img-top"  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=format%2Ccompresscs=tinysrgbdpr=1w=500" alt="Card image cap"/> */}
        <img
          className="card-img-top "
          src={this.props.Source}
          alt="Card image cap"
        />
        <div className="card-body">
          <h4 className="card-title">
            <a>{this.props.text}</a>
          </h4>
          {/* <a href="#" className="btn btn-primary">Button</a> */}
        </div>
      </div>
    );
  }
}

export default Card;
