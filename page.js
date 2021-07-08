var firebaseConfig = {
      apiKey: "AIzaSyBwHzjZSLbC84SrFAPKVFn0syCjI8G7Qtk",
      authDomain: "rip-off-twitter.firebaseapp.com",
      databaseURL: "https://rip-off-twitter-default-rtdb.firebaseio.com",
      projectId: "rip-off-twitter",
      storageBucket: "rip-off-twitter.appspot.com",
      messagingSenderId: "499432413647",
      appId: "1:499432413647:web:10092b97a1569379635aba",
      measurementId: "G-50DK9G6424"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("user_name");
document.getElementById("user_name_label").innerHTML = "Welcome!" +  user_name;
function add_room(){
var room_name = document.getElementById("room_name");
firebase.database().ref("/").child("room_name").update({purpose: "Adding room name"});
localStorage.setItem("room_name",room_name);
window.location="room.html";
}      
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("Room_name" + Room_names);
var row = "<div class='room_name' id=" + Room_names + "onclick = 'redirect_room(this.id)'>#" + Room_names +  "</div> <hr>";
document.getElementById("output").innerHTML+= row;  
});});}
getData();
function redirect_room(name){
      console.log(name);
      localStorage.setItem("name",name);
      window.location = "room.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

