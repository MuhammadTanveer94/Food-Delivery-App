import React, { Component } from "react";
import "./NavBar.css";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import { LoginForm } from "../Login";
import { UserSignUp } from "../SignUp";
import { OwnerSignUp } from "../SignUp";
import MenusButton from "../menus";
import { Button } from "../buttons/bootstrapButton";
import { login, signUp } from "../../config/firebase1";

class NavbarPage extends Component {
  state = {
    isOpen: false,
    loginModal: false,
    UserSignUpModel: false,
    OwnerSignUpflag: false,
    UserSignUpFlag: true
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggle = () => {
    this.setState({
      loginModal: !this.state.loginModal
    });
  };

  signUpToggle = () => {
    this.setState({
      UserSignUpModel: !this.state.UserSignUpModel
    });
  };

  handleUsertype = type => {
    if(type == "owner"){
      this.setState({OwnerSignUpflag: true, UserSignUpFlag: false})
    }else{
      this.setState({OwnerSignUpflag: false, UserSignUpFlag: true})
    }
  }

  render() {
    let { loginModal, UserSignUpModel, UserSignUpFlag, OwnerSignUpflag } = this.state;
    return (
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">FooD </strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          {/* model start */}
          {loginModal && (
            <MDBContainer
            style={{
              width: "20rem "
            }}
            >
              <MDBModal
                isOpen={this.state.loginModal}
                toggle={this.toggle}
                // style={{
                //   width: "200px !important"
                // }}
              >
                <LoginForm />
              </MDBModal>
            </MDBContainer>
          )}
          {/* model end */}

          {/* model start */}
          {UserSignUpModel && (
            <MDBContainer
              style={{
                width: "28rem"
              }}
            >
              <MDBModal
                isOpen={this.state.UserSignUpModel}
                toggle={this.signUpToggle}
              >
                <div className="col-12 col-sm-12 col-md-12" className="btnDiv">
                  <div className="col-6 col-sm-6 col-md-6 col-md-offset-1">
                    <Button value="User" classes="userBtn"  onClick={() => this.handleUsertype("user")}/>
                  </div>
                  <div className="col-6 col-sm-6 col-md-6 col-md-offset-1 col-sm-offset-1">
                    <Button value="Owner" classes="userBtn" onClick={() => this.handleUsertype("owner")}/>
                  </div>
                </div>
              {UserSignUpFlag && <UserSignUp />} 
              {OwnerSignUpflag && <OwnerSignUp />} 
              </MDBModal>
            </MDBContainer>
          )}
          {/* model end */}

          <MDBNavbarNav right>
            <MDBNavItem className="list_Items">
              {/* <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="twitter" />
            </MDBNavLink> */}
              <button
                type="button"
                className="btn btn-default btn-rounded registrationBtn"
                onClick={this.toggle}
              >
                Login
              </button>
            </MDBNavItem>
            <MDBNavItem>
              {/* <MenusButton /> */}

              <button
                type="button"
                className="btn btn-default btn-rounded registrationBtn"
                onClick={this.signUpToggle}
              >
                Sign Up
              </button>
            </MDBNavItem>
            <MDBNavItem />
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
