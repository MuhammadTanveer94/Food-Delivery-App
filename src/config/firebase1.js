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
  console.log(email, password);
  return new Promise((resolve, reject) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        res.json();
      })
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
    auth.createUserWithEmailAndPassword(email, password).then(data => {
      userData.uid = data.user.uid;
      db.ref(`${type}/` + data.user.uid)
        .set(userData)
        .then(() => {
          console.log(userData);
          resolve(userData);
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          reject(errorMessage);
          // ...
        });
    });
  });
}

export { login, signUp };
