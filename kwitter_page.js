//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDcgFDhBxw9xHeLnWgeFgHfWrdFJF_FjFU",
      authDomain: "kwitter-16cd9.firebaseapp.com",
      databaseURL: "https://kwitter-16cd9-default-rtdb.firebaseio.com",
      projectId: "kwitter-16cd9",
      storageBucket: "kwitter-16cd9.appspot.com",
      messagingSenderId: "686807272039",
      appId: "1:686807272039:web:6941df383b38233a1562c2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
      });
      document.getElementById("msg").value = "";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location  = "index.html";
}