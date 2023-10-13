function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_name);
   row = "< div class='rooom_name'id="+Room_name+" onclick='redirectToRoomName(this.id)' >3"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name" , name);
   window.location = "kwitter_page.html";
}
