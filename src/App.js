import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Screens/Home";
import { UserDash } from "./Screens/User/home";
import { AdminDash } from "./Screens/Admin/Home";
import { DetailScreen } from "./Screens/User/userDetailScreen";
import UserRequest from "./Screens/User/request/UserRequest";
import Dashboard from "./Screens/Dashboard/Dashboard";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
        {/* <Home /> */}
        {/* <UserDash /> */}
        {/* <AdminDash /> */}
        {/* <DetailScreen /> */}

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}
