
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCCKw0RlrkoWiRc7q0nAiCLHQF4fhQlMhc",
      authDomain: "animals-asqg.firebaseapp.com",
      projectId: "animals-asqg",
      storageBucket: "animals-asqg.appspot.com",
      messagingSenderId: "94050662315",
      appId: "1:94050662315:web:b1d892bf1c79022d06c4ee"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
