firebase.auth().onAuthStateChanged((user) => {
    if (user) {
   
      var uid = user.uid;

      window.location.replace("../home/home.html");
    
    } else {
      

    }
  });


function login(){
    var userEmail = document.getElementById("email_field").value;
    var userPassword = document.getElementById("password_field").value;


   window.alert(userEmail + " " + userPassword);
   //window.location.href = "./home/home.html";
   var x = 1;
   if (x<10){
     x+1;
     window/alert(x);
   }
}