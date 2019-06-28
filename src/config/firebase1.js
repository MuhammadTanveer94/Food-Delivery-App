import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDDDyqpQzphpKOzTE0Dd-IHIYER0zHJq0M",
  authDomain: "food-delivery-app-e0713.firebaseapp.com",
  databaseURL: "https://food-delivery-app-e0713.firebaseio.com",
  projectId: "food-delivery-app-e0713",
  storageBucket: "",
  messagingSenderId: "735722118947",
  appId: "1:735722118947:web:45f0a525789ef7f8"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.database();
var auth = firebase.auth();

function login(email, password) {
  console.log("signIn working")
  return new Promise((resolve, reject) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(res => res.json())
      .then(user => {
        console.log(user);
        resolve(user);
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        reject(errorMessage);
      });
  });
}

function signUp(email, password, userData, type) {
  console.log("working");

  return new Promise((resolve, reject) => {
    auth.createUserWithEmailAndPassword(email, password);
    let userUid = firebase.auth().currentUser.uid;
    console.log(userUid);
    db.ref(`${type}/` + userUid)
      .set(userData)
      .then(res => res.json())
      .then(newUser => {
        console.log(newUser);
        resolve(newUser);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        reject(errorMessage);
        // ...
      });
  });
}

export { login, signUp };
