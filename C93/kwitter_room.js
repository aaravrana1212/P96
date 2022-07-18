
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyChVxhF6jtwFoonZPQl8G38wTZB4ea4-Pk",
      authDomain: "gaming-project-6d6e1.firebaseapp.com",
      databaseURL: "https://gaming-project-6d6e1-default-rtdb.firebaseio.com",
      projectId: "gaming-project-6d6e1",
      storageBucket: "gaming-project-6d6e1.appspot.com",
      messagingSenderId: "174526319558",
      appId: "1:174526319558:web:524c067c2eb5bf585d80c7",
      measurementId: "G-YF2NGWT6R5"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
      room_name =  document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name "
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
         console.log ("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";   
         document.getElementById("output").innerHTML += row;
 
      //End code
      });});}
getData();
 function redirectToRoomName(name)
 {

console.log(name);
localStorage.setItem("room_name", name );
window.location = "kwitter_page.html";
 }
 function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
 }
