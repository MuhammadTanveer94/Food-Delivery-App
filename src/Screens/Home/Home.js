import React, { Component } from "react";
import { NavbarPage } from "../../component/NavBar";
import "./Home.css";
import SliderHome from "./Slider";
import { MDBRow } from "mdbreact";
import {Card} from '../../component/cards/landingCard'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      content: [
        {
          title: "Vulputate Mollis Ultricies Fermentum Parturient",
          description:
            "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
          button: "Read More",
          image: "https://i.imgur.com/ZXBtVw7.jpg",
          user: "Luan Gjokaj",
          userProfile: "https://i.imgur.com/JSW6mEk.png"
        },
        {
          title: "Tortor Dapibus Commodo Aenean Quam",
          description:
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
          button: "Discover",
          image: "https://i.imgur.com/DCdBXcq.jpg",
          user: "Erich Behrens",
          userProfile: "https://i.imgur.com/0Clfnu7.png"
        },
        {
          title: "Phasellus volutpat metus",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
          button: "Buy now",
          image: "https://i.imgur.com/DvmN8Hx.jpg",
          user: "Bruno Vizovskyy",
          userProfile: "https://i.imgur.com/4KeKvtH.png"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <NavbarPage />
        <SliderHome />

        <MDBRow id="main">
          {/* <h1>Select Your City</h1><br/> */}
          <Card
            Source={
              "https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Karachi.jpg?width=400&height=250"
            }
            text={"Karachi"}
          />
          &nbsp;&nbsp;
          <Card
            Source={
              "https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Lahore.jpg?width=400&height=250"
            }
            text={"Islamabad"}
          />
          &nbsp;&nbsp;
          <Card
            Source={
              "https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Islamabad.jpg?width=400&height=250"
            }
            text={"Rawalpindi"}
          />
          &nbsp;&nbsp;
          <Card
            Source={
              "https://images.deliveryhero.io/image/foodpanda/city-tile-pk/Rawalpindi.jpg?width=400&height=250"
            }
            text={"Hydrabad"}
          />
          &nbsp;&nbsp;
        </MDBRow>
      </div>
    );
  }
}
