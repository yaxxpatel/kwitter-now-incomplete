
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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
    



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name -"+ room_names);
row = "<div class='room_name id=" + room_names + "onclick = 'redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom(){
      room_name = document.getElementById("room_name").value

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location  = "index.html";
}