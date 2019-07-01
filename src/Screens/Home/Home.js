import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
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
    this.state = {};

    if (!localStorage.hasOwnProperty("isAuthenticated")) {
      localStorage.isAuthenticated = false;
    }
  }

  render() {
    if (JSON.parse(localStorage.isAuthenticated)) {
      return <Redirect to="/dashboard" />;
    }
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
