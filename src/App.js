import React, {Component} from "react";
import "./App.css";
import {Home} from './Screens/Home'
import {UserDash} from './Screens/userDashboard'
import {DetailScreen} from './Screens/userDetailScreen'

export default class App extends Component{
  constructor(props){
    super();
    this.state={

    }
  }

  render(){
    return(
      <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      {/* <Home /> */}
      {/* <UserDash /> */}
      <DetailScreen />
    </div>

    )
  }

}
