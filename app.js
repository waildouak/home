// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCB67fiRgbbNo7-N439hKDcWKxJE9khpkI",
    authDomain: "wailcoding.firebaseapp.com",
    projectId: "wailcoding",
    storageBucket: "wailcoding.appspot.com",
    messagingSenderId: "280750190499",
    appId: "1:280750190499:web:5ce9e3e9b1576c32f4f416",
    measurementId: "G-32CFJE5LRK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}