import React, { Component } from "react";


class userDashCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div class="card card-cascade narrower">
        <div class="view view-cascade overlay">
          <img
            class="card-img-top"
            src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
            alt="Card image cap"
          />    
          <a>
            <div class="mask rgba-white-slight" />
          </a>
        </div>

        <div class="card-body card-body-cascade">
          <h5 class="pink-text pb-2 pt-1">
            <i class="fas fa-utensils" /> Culinary
          </h5>

          <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>

          <p class="card-text">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi.
          </p>

          <a class="btn btn-unique">Button</a>
        </div>
      </div>
    );
  }
}

export default userDashCard;
