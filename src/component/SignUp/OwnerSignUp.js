import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard } from "mdbreact";
import "./UserSignUp.css";
import SelectInput from "../inputs/selectInput";
import MaterialInput from "../inputs/materialInput";
import backgroundImage from "../../assets/images/resturents.jpg";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { makeStyles } from "@material-ui/core/styles";
import { login, signUp } from "../../config/firebase1";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}));

export default class OwnerSignUp extends Component {
  constructor() {
    super();
    this.state = {
      gender: ["Male", "Female"],
      resturentName: "",
      name: "",
      email: "",
      country: "",
      password: "",
      confirmPassword: "",
      status: "Admin"
    };
  }

  handleInputChange = (e, key) => {
    console.log(key);
    this.setState({ [key]: e.target.value });
  };

  handleAdminSignUp = () => {
    console.log("handleSignUp");
    this.fetchSignUpData();
  };

  async fetchSignUpData() {
    let {
      resturentName,
      name,
      email,
      country,
      password,
      status
    } = this.state;

    let data = {
      resturentName,
      name,
      email,
      country,
      password,
      status
    };
    try {
      const userData = await signUp(email, password, data, "Admin");
    } catch (e) {
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    let { classes } = this.props;
    let { gender } = this.state;
    return (
      <MDBContainer style={{ padding: "0px" }}>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard
              className="card-image"
              style={{
                // backgroundImage:
                // `url(${backgroundImage})`,
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)",
                width: "31rem"
              }}
            >
              <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                <div className="text-center">
                  <h3 className="white-text mb-5 mt-4 font-weight-bold">
                    <strong>Sign</strong>
                    <a href="#!" className="green-text font-weight-bold">
                      <strong> UP</strong>
                    </a>
                  </h3>
                </div>
                <MaterialInput
                  label="Resturent name"
                  placeholder="Insert your resturent name."
                  fullWidth={true}
                  onChange={e => this.handleInputChange(e, "resturentName")}
                />
                <div className="inputDiv">
                  <MaterialInput
                    label="Full name"
                    placeholder="Insert your full name."
                    onChange={e => this.handleInputChange(e, "name")}
                  />
                  <MaterialInput
                    label="Email"
                    placeholder="Insert your email."
                    onChange={e => this.handleInputChange(e, "email")}
                   
                  />
                </div>
                <div className="inputDiv">
                  <MaterialInput
                    label="Country"
                    placeholder="Insert your country."
                    onChange={e => this.handleInputChange(e, "country")}
                  />
                  <MaterialInput
                    label="City"
                    placeholder="Insert your city."
                    onChange={e => this.handleInputChange(e, "city")}
                  />
                </div>{" "}
                <div className="inputDiv">
                  <MaterialInput
                    label="Password"
                    placeholder="Insert your password."
                    onChange={e => this.handleInputChange(e, "Password")}
                  />
                  <MaterialInput
                    label="Confirm password"
                    placeholder="Insert your password."
                    onChange={e => this.handleInputChange(e, "confirmPassword")}
                  />
                </div>
                <Button variant="contained" color="default">
                  <input type="file" name="" id="" />
                  <CloudUploadIcon />
                </Button>
                <div className="md-form pb-5" />
                <MDBRow className="d-flex align-items-center mb-4">
                  <div className="text-center mb-3 col-md-12">
                    <MDBBtn
                      color="success"
                      rounded
                      type="button"
                      className="btn-block z-depth-1"
                      onClick={this.handleAdminSignUp}
                    >
                      Sign Up
                    </MDBBtn>
                  </div>
                </MDBRow>
                <MDBCol md="12">
                  <p className="font-small white-text d-flex justify-content-end">
                    Already have an account?
                    <a href="#!" className="green-text ml-1 font-weight-bold">
                      Login
                    </a>
                  </p>
                </MDBCol>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
