import * as firebase from "firebase";

// <!-- The core Firebase JS SDK is always required and must be listed first -->
{/* <script src="https://www.gstatic.com/firebasejs/6.0.1/firebase-app.js" />; */}

// <!-- TODO: Add SDKs for Firebase products that you want to use
//  https://firebase.google.com/docs/web/setup#config-web-app -->

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBHazdZle7FR7u4GSpjsnaR7C5n_xyE5e0",
  authDomain: "login-checker.firebaseapp.com",
  databaseURL: "https://login-checker.firebaseio.com",
  projectId: "login-checker",
  storageBucket: "login-checker.appspot.com",
  messagingSenderId: "720472830401",
  appId: "1:720472830401:web:0f0e627505929932"
};
{
  /* // Initialize Firebase */
}
firebase.initializeApp(firebaseConfig);

var db = firebase.database();
var auth = firebase.auth();

function login(email, password) {
  return new Promise((resolve, reject) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => res.json())
      .then(user => {
        resolve(user);
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        reject(errorMessage);
      });
  });
}

function signUp(email, password) {
  console.log(email, password)

  let usrObj = {
    email,
    password
  }
  return new Promise((resolve, reject) => {
    auth.signInWithEmailAndPassword(email, password)
    let userUid= auth.currentUser.userUid;
    db.ref(`users/${userUid}`).set(usrObj)
    .then( res => res.json())
    .then( newUser => {
        resolve(newUser)
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      reject(errorMessage)
      // ...
    });
  });
}

export { login, signUp };
