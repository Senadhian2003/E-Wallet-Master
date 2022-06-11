import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

      

import {
    getAuth,
    signInWithEmailAndPassword,
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

  const db = getDatabase(app);
  
  


document.getElementById("login").addEventListener('submit',login)

function login(e){
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
   // console.log(email,password);
  
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
    
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    localStorage.setItem("userid",user.uid);

    await getDetail(db,user);


    window.location = 'home.html';
    

    alert("User Logged in Successfully")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error")
  });
  
}
    

async function getDetail(db,user){

  let dbref = ref(db);


   await get(child(dbref,"users/"+ user.uid)).then((snapshot)=>{

      if(snapshot.exists()){
          let BankName = snapshot.val().bank;
          let userName = snapshot.val().username;
          let accountNumber = snapshot.val().accountNumber;

          localStorage.setItem("userName",userName);
          localStorage.setItem("BankName",BankName);
          localStorage.setItem("accountNumber",accountNumber);

          console.log(userName, BankName, accountNumber);
          

      }
      else{
          alert("No data found");
      }
  }).catch((error)=>{
      const errorMessage = error.message;
      alert(errorMessage);
  });


}