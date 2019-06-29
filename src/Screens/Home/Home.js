import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavbarPage } from "../../component/NavBar";
import "./Home.css";
import SliderHome from "./Slider";
import { MDBRow } from "mdbreact";
import { Card } from "../../component/cards/landingCard";
import { FooterPage } from "../../component/footer";
import { AdminDash } from "../Admin/Home";
import { UserDash } from "../User/home";
import { DetailScreen } from "../User/userDetailScreen";

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
        <div className="fileLinks">
          <ul class="list-unstyled">
            <Link to={"/User"}>
              {" "}
              <li>User Dashboard</li>
            </Link>
            <Link to={"/Admin"}>
              {" "}
              <li>Company Dashboard</li>
            </Link>
            <Link to={"/detailScreen"}>
              {" "}
              <li>User Detail Page</li>
            </Link>
            <Link to={"/userRequest"}>
              {" "}
              <li>User Request Page</li>
            </Link>

            {/* <li>Company Dashboard</li>
              <li>User Detail Page</li>
              <li>User Dashboard</li> */}
          </ul>
        </div>
        <SliderHome />
        <div style={{ margin: "25px 0px" }}>
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
        <div style={{ margin: "25px 0px 0px 0px" }}>
          <FooterPage />
        </div>
      </div>
    );
  }
}
