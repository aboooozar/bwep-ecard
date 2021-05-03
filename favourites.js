document.getElementById("inputname").value = localStorage.getItem("name");
document.getElementById("inputrecipient").value =  localStorage.getItem("recipient");
document.getElementById("inputmessage").value =localStorage.getItem("message");
function updateFav() {
  let a = document.getElementById("inputname").value;
  let b = document.getElementById("inputrecipient").value;
  let c = document.getElementById("inputmessage").value;

  if (a && b && c) {
    localStorage.setItem("name",a);
    localStorage.setItem("recipient",b);
    localStorage.setItem("message",c);
    location.reload();
    alert("New favourite has been uploaded!");
  } else {
    alert("Please fill in all box.");
  }
}
//display user output code
function getDisplay(){
var rp = document.getElementById("inputrecipient").value;
var msg = document.getElementById("inputmessage").value;
var ui = document.getElementById("inputname").value;
document.getElementById("display-recipient").innerHTML = rp ;
document.getElementById("msg").innerHTML = msg;
document.getElementById("display").innerHTML = ui;
}
function saveuser(){
  let namaR = document.getElementById("inputrecipient").value;
  let mssg = document.getElementById("inputmessage").value;
  let namaT = document.getElementById("inputname").value;

  localStorage.setItem("namareci",namaR);
  localStorage.setItem("mesis",mssg);
  localStorage.setItem("namafrom",namaT);
}
function recall(){
  let namaR = document.getElementById("inputrecipient").value;
  let mssg = document.getElementById("inputmessage").value;
  let namaT = document.getElementById("inputname").value;

  document.getElementById("display-recipient").innerHTML = localStorage.getItem("namareci",namaR);
  document.getElementById("msg").innerHTML = localStorage.getItem("mesis",mssg);
document.getElementById("display").innerHTML = localStorage.getItem("namafrom",namaT);

}
function clearf(){
  let c = "";
document.getElementById("inputrecipient").value = c;
document.getElementById("inputmessage").value = c;
document.getElementById("inputname").value = c;

  document.getElementById("display-recipient").innerHTML = c;
  document.getElementById("msg").innerHTML = c;
document.getElementById("display").innerHTML = c;
}

function totool(){
  let namaR = document.getElementById("inputrecipient").value;
  let mssg = document.getElementById("inputmessage").value;
  let namaT = document.getElementById("inputname").value;

  document.getElementById("inputrecipient").value = localStorage.getItem("namareci",namaR);
  document.getElementById("inputmessage").value = localStorage.getItem("mesis",mssg);
document.getElementById("inputname").value = localStorage.getItem("namafrom",namaT);
}
