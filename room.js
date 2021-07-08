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
function getData() { firebase.database().ref(Room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
       message_data = childData;
       console.log(firebase_message_id);
       console.log(message_data);
       var name = message_data("name");
       var message = message_data("message");
       var like = message_data("like");
      var tag_name = "<h2>"+ name + "img class='user_tick' src= 'tick.png' </h2>";
      var tag_message = "<h2 class='message_2'>" + message + "</h2>";
      var like_button = "<button class= 'btn btn-warning' + id=" + firebase_message_id  + "value=" + like + "onclick= 'update_likes()'";
}})})}
user_name = localStorage.getItem("user_name"); Room_name = localStorage.getItem("Room_name"); 
function send(){
          var msg = document.getElementById("msg").value;
firebase.database().ref(Room_name).push({
    name:Username,
message:msg,
likes:0});

document.getElementById(message).innerHTML = "";
getData();}
function update_likes(firebase_message_id){
  console.log("clicked on like button" + firebase_message_id);
var button_id = firebase_message_id;
likes = document.getElementById(button_id).value;
var updated_likes = Number(likes) + 1;
console.log(updated_likes);
firebase.database().ref(Room_name).child(firebase_message_id).update({like:update_like});
}
