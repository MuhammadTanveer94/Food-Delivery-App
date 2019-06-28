import React, {Component} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Home} from './Screens/Home'
import {UserDash} from './Screens/userDashboard'
import {AdminDash} from './Screens/adminDashboard'
import {DetailScreen} from './Screens/userDetailScreen'
import UserRequest from './Screens/userDashboard/UserRequest'

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
      {/* <AdminDash /> */}
      {/* <DetailScreen /> */}

      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/UserDashBoard" component={UserDash} />            
            {/* <Route path="/courses/" component={CoursePage} /> */}
            {/* <Route path="/node-js" component={CourseDetailHome} /> */}
            {/* <Route path="/node-js" component={CourseDetailHome1} />             */}
            <Route exact path="/AdminDashBoard" component={AdminDash} />            
            <Route path="/detailScreen" component={DetailScreen} />
            <Route path="/userRequest" component={UserRequest} />            
                        
            <Route component={Home} />
          </Switch>
        </Router>
    </div>

    )
  }

}
