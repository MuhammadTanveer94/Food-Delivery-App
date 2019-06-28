import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard } from "mdbreact";
import "./UserSignUp.css";
import SelectInput from "../inputs/selectInput";
import MaterialInput from "../inputs/materialInput";
import backgroundImage from "../../assets/images/resturents.jpg";
import { login, signUp } from "../../config/firebase1";

export default class UserSignUp extends Component {
  constructor() {
    super();
    this.state = {
      genderData: ["Male", "Female"],
      name: "",
      email: "",
      age: "",
      gender: "",
      country: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleInputChange = (e, key) => {
    console.log(key, e.target.value)
    this.setState({ [key]: e.target.value });
  };

  handleUserSignUp = () => {
    console.log("handleSignUp");
    this.fetchSignUpData();
  };

  async fetchSignUpData() {
    let {
      name,
      email,
      age,
      gender,
      country,
      password,
      confirmPassword
    } = this.state;

    let data = {
      name,
      email,
      age,
      gender,
      country,
      password,
    }
    try {
      const userData = await signUp(email, password, data, "User");
    } catch (e) {
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    let { genderData } = this.state;
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
                <div className="inputDiv">
                  <MaterialInput
                    label="Full name"
                    placeholder="Insert your full name."
                    onChange={e => this.handleInputChange(e, "name")}
                  />
                  <MaterialInput
                    label="Email"
                    placeholder="Insert your email."
                    type="email"
                    onChange={e => this.handleInputChange(e, "email")}
                  />
                </div>
                <div className="inputDiv">
                  <MaterialInput
                    label="Age"
                    placeholder="Insert your age."
                    onChange={e => this.handleInputChange(e, "age")}
                    type="number"
                  />
                  <SelectInput
                    data={genderData}
                    label="Gender"
                    onChange={e => this.handleInputChange(e, "gender")}
                  />
                </div>{" "}
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
                    placeholder="Insert your confirm password."
                    type="password"
                    onChange={e => this.handleInputChange(e, "password")}
                  />
                  <MaterialInput
                    label="confirm password"
                    placeholder="confirm your password."
                    type="password"
                    onChange={e => this.handleInputChange(e, "confirmPassword")}
                  />
                </div>{" "}
                <div className="md-form pb-5">
                  {/* <div className="form-check my-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck17"
                    />
                    <label
                      className="form-check-label white-text"
                      htmlFor="defaultCheck17"
                    >
                      Accept the
                      <a href="#!" className="green-text font-weight-bold">
                        Terms and Conditions
                      </a>
                    </label>
                  </div> */}
                </div>
                <MDBRow className="d-flex align-items-center mb-4">
                  <div className="text-center mb-3 col-md-12">
                    <MDBBtn
                      color="success"
                      rounded
                      type="button"
                      className="btn-block z-depth-1"
                      onClick={this.handleUserSignUp}
                    >
                      Sign Up
                    </MDBBtn>
                  </div>
                </MDBRow>
                <MDBCol md="12">
                  <p className="font-small white-text d-flex justify-content-end">
                    already have an account?
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
