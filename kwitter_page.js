//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA5N_H_WTzL7taidMdXuXTZnUyZQmAwB6E",
      authDomain: "kiwtter-a0975.firebaseapp.com",
      databaseURL: "https://kiwtter-a0975-default-rtdb.firebaseio.com",
      projectId: "kiwtter-a0975",
      storageBucket: "kiwtter-a0975.appspot.com",
      messagingSenderId: "762967223581",
      appId: "1:762967223581:web:84945f9c3a7016994745f4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send1(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
namewithtag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span1="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
row=namewithtag+messagewithtag+likebutton+span1;
document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();
function updatelike(message_id){
      buttonid=message_id;
      likes=document.getElementById(buttonid).value;
      updated=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
      like:updated
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}