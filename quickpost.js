 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDfFiOpKhUHnYCh37cY0u62dqViGW4FJpY",
    authDomain: "einstein-uldf.firebaseapp.com",
    databaseURL: "https://einstein-uldf-default-rtdb.firebaseio.com",
    projectId: "einstein-uldf",
    storageBucket: "einstein-uldf.appspot.com",
    messagingSenderId: "762855191597",
    appId: "1:762855191597:web:a6d5b38eeb47c67656f4a4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "quickpost_room.html";

}