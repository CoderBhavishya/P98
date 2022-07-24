var firebaseConfig = {
    apiKey: "AIzaSyCRNDS4IhKVpCaish0-0UofiZMRtJDoM5s",
    authDomain: "eistinbot.firebaseapp.com",
    databaseURL: "https://eistinbot-default-rtdb.firebaseio.com",
    projectId: "eistinbot",
    storageBucket: "eistinbot.appspot.com",
    messagingSenderId: "545461483090",
    appId: "1:545461483090:web:463a2b4233f4d92211118b",
    measurementId: "G-ST44NFQ684"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
 function addUser()
 {
     user_name=document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
       purpose:"adding user"  
     })
 }