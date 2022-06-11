
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

  firebase.initializeApp(firebaseConfig);
  let x =localStorage.getItem("userid");

  FetchAllData();


function FetchAllData() {
    firebase.database().ref('Transaction').once('value', function (snapshot) {
        snapshot.forEach(
            function (ChildSnapshot) {

                let m = ChildSnapshot.val().userId;

                if(m == x){
                let a = ChildSnapshot.val().userName;
                let b = ChildSnapshot.val().BankName;
                let c = ChildSnapshot.val().AccountNumber;
                let d = ChildSnapshot.val().BillType;
                let e = ChildSnapshot.val().ServiceNumber;
                let f = ChildSnapshot.val().Amount;
                
                console.log(a, b, c, d, e, f);
                createTable(a,b,c,d,e,f);

                }
                
            }
        );
       
    })
}


function createTable (a,b,c,d,e,f){

    let x = document.getElementById("table");
    let row = x.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();
    let cell5 = row.insertCell();
    let cell6 = row.insertCell();
    


    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = c ;
    cell4.innerHTML = d;
    cell5.innerHTML = e;
    cell6.innerHTML = f ;



}