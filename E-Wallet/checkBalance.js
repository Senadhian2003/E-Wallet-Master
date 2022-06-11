import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getDatabase, set, ref, get, child, update } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

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
  


let x =localStorage.getItem("userid");
console.log(x);

const getElementVal = (id) => {
    return document.getElementById(id).value;
  };


let btn = document.getElementById("checkBalance");

btn.addEventListener("click", add );


function add(){

    
    
    let pin = getElementVal("pin");
    
    let dbref = ref(db);

    


    get(child(dbref,"users/"+x)).then((snapshot)=>{

        if(snapshot.exists()){
            let pindb = snapshot.val().accountPin;

            if(pin == pindb){
                let amountdb =  snapshot.val().walletPoint;
            
                console.log(amountdb);
    
                alert("Your Balance is"+ amountdb);
            }
            else{
                alert("Enter Correct Pin");
            }

        }
        else{
            alert("No data found");
        }
    }).catch((error)=>{
        const errorMessage = error.message;
        alert(errorMessage);
    });


}