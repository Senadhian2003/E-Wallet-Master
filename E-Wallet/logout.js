import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

import {
    getAuth,
    signOut
  } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDUTWed8uYJZay6sA2Pwjo1lSYzFVK5CKQ",
    authDomain: "wallet-app-cc73f.firebaseapp.com",
    databaseURL: "https://wallet-app-cc73f-default-rtdb.firebaseio.com",
    projectId: "wallet-app-cc73f",
    storageBucket: "wallet-app-cc73f.appspot.com",
    messagingSenderId: "1097221562614",
    appId: "1:1097221562614:web:cb10444d9d36389d560cd7",
    measurementId: "G-EN7WN5Q3BV",
  };  

  const app = initializeApp(firebaseConfig);
  
  document.getElementById("logoutBtn").addEventListener("click",logout);


function logout(){

    const auth = getAuth();
 signOut(auth).then(() => {

    alert("User Logged Out Succesfully");

    localStorage.removeItem("userid");
    localStorage.removeItem("billType");
    localStorage.removeItem("serviceNumber");

    window.location = 'index.html';
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
});

}


  