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
var ui = document.getElementById("username").value;
var msg = document.getElementById("message").value;
document.getElementById("display").innerHTML =ui;
}
//display user output code

var dragvalue;
function move(id){
  var elem = document.getElementById("cake");
  element.style.position = "absolute";
  element.onmousedown = function(){
    dragvalue = element;
    
  }
}
