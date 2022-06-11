import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getDatabase, set, ref, get, child, update,push } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

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
  firebase.initializeApp(firebaseConfig);
  const db = getDatabase(app);
  
  let y =localStorage.getItem("billType");
 let z =localStorage.getItem("serviceNumber");
 console.log(y,z);


let x =localStorage.getItem("userid");
console.log(x);

const getElementVal = (id) => {
    return document.getElementById(id).value;
  };


  let btn = document.getElementById("subPoint");

  btn.addEventListener("click",sub);

  function sub(){
    let amount = getElementVal("amount");
    let pin = getElementVal("pin");


    let Name = localStorage.getItem("userName");
    let BankName = localStorage.getItem("BankName");
    let AccountNumber = localStorage.getItem("accountNumber");

    console.log(Name, BankName, AccountNumber);
    let dbref = ref(db);
    get(child(dbref,"users/"+x)).then((snapshot)=>{

        if(snapshot.exists()){
            let pindb = snapshot.val().accountPin;
            let amountdb =  snapshot.val().walletPoint;
            let sum = parseInt(amountdb)  - parseInt(amount) ;
            console.log(sum);

            if (pin == pindb ){

                update(ref(db, 'users/' + x), {
                    walletPoint : sum
                  }).then(()=>{
                    alert("Amount added successfully");
                    
                  })
                  .catch((error)=>{
                      const errorMessage = error.message;
                      alert(errorMessage);
                  });

                  firebase.database().ref("Transaction").push({
                    userId : x,
                    userName : Name,
                    BankName : BankName,
                    AccountNumber : AccountNumber,
                    BillType :y,
                    ServiceNumber : z,
                    Amount : amount
                  })
        
            }
            else{
                alert("Pin Number dosent Match");
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



