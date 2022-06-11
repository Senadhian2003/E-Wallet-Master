// // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries



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

// // Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const auth = getAuth();

let form = document.getElementById("form");

form.addEventListener("submit", addData);

function addData(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log(email, password);

  createUserWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
      // Signed in
      const user = userCredential.user;
      await fun(db,user);
      window.location = 'index.html';
     
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });

   

}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};


async function fun (db,user) {

      let username = getElementVal("name");
      let bankName = getElementVal("dropDown");
      let accountNum = getElementVal("accNum");
      let accountPin = getElementVal("accPin");

      

      await set(ref(db,'users/'+user.uid),{
        username : username,
        bank : bankName,
        accountNumber : accountNum,
        accountPin : accountPin,
        walletPoint : 0
      });
      console.log(username,bankName, accountNum,accountPin);
      alert("User Created");

      
      


}