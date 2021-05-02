//colour change code
let colors = ['#FFDFDD','#957DAD','#FEC8D8','#B1D4EC','#F9F0C2','#D2F8DF'];
//get button
let button = document.getElementById('button');
//addEventListener
button.addEventListener('click', function(){
  //randomizer
  var randomColor = colors[Math.floor(Math.random() * colors.length)]
  //get container
  let container = document.getElementById('card');

  container.style.background = randomColor;


})
// colour change code

//display user output code
function getDisplay(){
var rp = document.getElementById("recipient").value;
var msg = document.getElementById("message").value;
var ui = document.getElementById("username").value;
document.getElementById("display-recipient").innerHTML = rp ;
document.getElementById("msg").innerHTML = msg;
document.getElementById("display").innerHTML = ui;
}
//display user output code

function allowDrop(ev){
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text",ev.target.id);
}
function drop(ev){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
//
function saveuser(){
  let namaR = document.getElementById("recipient").value;
  let mssg = document.getElementById("message").value;
  let namaT = document.getElementById("username").value;

  localStorage.setItem("namareci",namaR);
  localStorage.setItem("mesis",mssg);
  localStorage.setItem("namafrom",namaT);
}
function recall(){
  let namaR = document.getElementById("recipient").value;
  let mssg = document.getElementById("message").value;
  let namaT = document.getElementById("username").value;

  document.getElementById("display-recipient").innerHTML = localStorage.getItem("namareci",namaR);
  document.getElementById("msg").innerHTML = localStorage.getItem("mesis",mssg);
document.getElementById("display").innerHTML = localStorage.getItem("namafrom",namaT);

}
function clearf(){
  let c = "";
document.getElementById("recipient").value = c;
document.getElementById("message").value = c;
document.getElementById("username").value = c;

  document.getElementById("display-recipient").innerHTML = c;
  document.getElementById("msg").innerHTML = c;
document.getElementById("display").innerHTML = c;
}

function totool(){
  let namaR = document.getElementById("recipient").value;
  let mssg = document.getElementById("message").value;
  let namaT = document.getElementById("username").value;

  document.getElementById("recipient").value = localStorage.getItem("namareci",namaR);
  document.getElementById("message").value = localStorage.getItem("mesis",mssg);
document.getElementById("username").value = localStorage.getItem("namafrom",namaT);
}
