import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard } from "mdbreact";
import "./Login.css";
import MaterialInput from "../inputs/materialInput";
import { login, signUp } from "../../config/firebase1";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange = (e, key) => {
    console.log(key, e.target.value)
    this.setState({ [key]: e.target.value });
  };

  handleSignIn = () => {
    console.log("handleSignIn");
    this.fetchSignInData();
  };

  async fetchSignInData() {
    let {
      email,
      password
    } = this.state;

    try {
      const userData = await login(email, password);
    } catch (e) {
    } finally {
      this.setState({ loading: false });
    }
  }


  render() {
    return (
      <MDBContainer style={{ padding: "0px" }}>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard
              className="card-image"
              style={{
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)",
                width: "31rem"
              }}
            >
              <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                <div className="text-center">
                  <h3 className="white-text mb-5 mt-4 font-weight-bold">
                    <strong style={{ color: "black" }}>Login</strong>
                    {/* <a href="#!" className="green-text font-weight-bold">
                    <strong> UP</strong>
                  </a> */}
                  </h3>
                </div>
                {/* <InputPage /> */}
                <MaterialInput
                  label="Email"
                  placeholder="Insert your email."
                  fullWidth={true}
                  onChange={e => this.handleInputChange(e, "email")}
                />
                <MaterialInput
                  label="Password"
                  placeholder="Insert your password."
                  fullWidth={true}
                  onChange={e => this.handleInputChange(e, "password")}
                  type="password"
                />
                <div className="md-form pb-3" />
                <MDBRow className="d-flex align-items-center mb-4">
                  <div className="text-center mb-3 col-md-12">
                    <MDBBtn
                      color="success"
                      rounded
                      type="button"
                      className="btn-block z-depth-1"
                      onClick={this.handleSignIn}
                    >
                      Login
                    </MDBBtn>
                  </div>
                </MDBRow>
                <MDBCol md="12">
                  <p className="font-small white-text d-flex justify-content-end">
                    don't have an account?
                    <a href="#!" className="green-text ml-1 font-weight-bold">
                      Sign Up
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

export default LoginForm;

// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

// const useStyles = makeStyles(theme => ({
//   '@global': {
//     body: {
//       backgroundColor: theme.palette.common.white,
//     },
//   },
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function LoginForm() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="#" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>

//     </Container>
//   );
// }
