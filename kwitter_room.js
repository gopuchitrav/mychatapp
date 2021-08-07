//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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
    document.getElementById("username").innerHTML="Welcome "+user_name+" !";
    function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'> #"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirect(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}