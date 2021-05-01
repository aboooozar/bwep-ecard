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
