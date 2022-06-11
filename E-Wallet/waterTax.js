let btn = document.getElementById("water");

btn.addEventListener("submit",detail);

function detail(e){
    e.preventDefault();
    let billType = getElementVal("dropDown");
    let serviceNumber = getElementVal("sernum");
    

    console.log(billType, serviceNumber);

    localStorage.setItem("billType",billType);
    localStorage.setItem("serviceNumber",serviceNumber);

    window.location = 'payWithWallet.html';
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  