function white() {
  document.getElementById("canvas").style.backgroundColor = "#FFF";
}

function coffee() {
  document.getElementById("canvas").style.backgroundColor = "#D0A48D";
}

function khaki() {
  document.getElementById("canvas").style.backgroundColor = "#DAD4B6";
}

function champagne() {
  document.getElementById("canvas").style.backgroundColor = "#FCF1DC";
}

function mauve() {
  document.getElementById("canvas").style.backgroundColor = "#EBCCFF";
}

function cinnamon() {
  document.getElementById("canvas").style.backgroundColor = "#CFAC94";
}

function wineRed() {
  document.getElementById("canvas").style.backgroundColor = "#C25964";
}

function tulip() {
  document.getElementById("canvas").style.backgroundColor = "#FFA4A9";
}

function myFunction() {
  let a = document.getElementById("txtName").value;
  let b = document.getElementById("txtGreetings").value;
  let c = document.getElementById("txtEvent").value;
  let d = document.getElementById("txtDate").value;
  let e = document.getElementById("txtTime").value;
  let f = document.getElementById("txtVenue").value;
  let g = document.getElementById("txtLocation").value;
  let h = document.getElementById("txtRSVP").value;

  document.getElementById("lblName").innerHTML = a;
  document.getElementById("lblGreetings").innerHTML = b;
  document.getElementById("lblEvent").innerHTML = c;
  document.getElementById("lblDate").innerHTML = d;
  document.getElementById("lblTime").innerHTML = e;
  document.getElementById("lblVenue").innerHTML = f;
  document.getElementById("lblLocation").innerHTML = g;
  document.getElementById("lblRSVP").innerHTML = h;
}
function setFavorite(){
  let a = document.getElementById("txtName").value;
  let b = document.getElementById("txtGreetings").value;
  let c = document.getElementById("txtEvent").value;
  let d = document.getElementById("txtDate").value;
  let e = document.getElementById("txtTime").value;
  let f = document.getElementById("txtVenue").value;
  let g = document.getElementById("txtLocation").value;
  let h = document.getElementById("txtRSVP").value;

  localStorage.setItem("name",a);
  localStorage.setItem("greetings",b);
  localStorage.setItem("event",c);
  localStorage.setItem("date",d);
  localStorage.setItem("time",e);
  localStorage.setItem("venue",f);
  localStorage.setItem("location",g);
  localStorage.setItem("RSVP",h);
}
function loadFavoriteTemplate(){
  let a = document.getElementById("txtName").value;
  let b = document.getElementById("txtGreetings").value;
  let c = document.getElementById("txtEvent").value;
  let d = document.getElementById("txtDate").value;
  let e = document.getElementById("txtTime").value;
  let f = document.getElementById("txtVenue").value;
  let g = document.getElementById("txtLocation").value;
  let h = document.getElementById("txtRSVP").value;

  document.getElementById("lblName").innerHTML = localStorage.getItem("name",a);
  document.getElementById("lblGreetings").innerHTML =  localStorage.getItem("greetings",b);
  document.getElementById("lblEvent").innerHTML =localStorage.getItem("event",c);
  document.getElementById("lblDate").innerHTML =localStorage.getItem("date",d);
  document.getElementById("lblTime").innerHTML =  localStorage.getItem("time",e);
  document.getElementById("lblVenue").innerHTML =  localStorage.getItem("venue",f);
  document.getElementById("lblLocation").innerHTML =  localStorage.getItem("location",g);
  document.getElementById("lblRSVP").innerHTML =  localStorage.getItem("RSVP",h);
}
function loadFavoritetool(){
  let a = document.getElementById("txtName").value;
  let b = document.getElementById("txtGreetings").value;
  let c = document.getElementById("txtEvent").value;
  let d = document.getElementById("txtDate").value;
  let e = document.getElementById("txtTime").value;
  let f = document.getElementById("txtVenue").value;
  let g = document.getElementById("txtLocation").value;
  let h = document.getElementById("txtRSVP").value;

  document.getElementById("txtName").value = localStorage.getItem("name",a);
  document.getElementById("txtGreetings").value =  localStorage.getItem("greetings",b);
  document.getElementById("txtEvent").value =localStorage.getItem("event",c);
  document.getElementById("txtDate").value =localStorage.getItem("date",d);
  document.getElementById("txtTime").value =  localStorage.getItem("time",e);
  document.getElementById("txtVenue").value =  localStorage.getItem("venue",f);
  document.getElementById("txtLocation").value =  localStorage.getItem("location",g);
  document.getElementById("txtRSVP").value =  localStorage.getItem("RSVP",h);
}
function clearText(){
  let a="";
  document.getElementById("txtName").value=a;
  document.getElementById("txtGreetings").value=a;
  document.getElementById("txtEvent").value=a;
  document.getElementById("txtDate").value=a;
  document.getElementById("txtTime").value=a;
  document.getElementById("txtVenue").value=a;
  document.getElementById("txtLocation").value=a;
  document.getElementById("txtRSVP").value=a;

  document.getElementById("lblName").innerHTML =a;
  document.getElementById("lblGreetings").innerHTML =a;
  document.getElementById("lblEvent").innerHTML =a;
  document.getElementById("lblDate").innerHTML =a;
  document.getElementById("lblTime").innerHTML =a;
  document.getElementById("lblVenue").innerHTML =a;
  document.getElementById("lblLocation").innerHTML =a;
  document.getElementById("lblRSVP").innerHTML =a;
}
function reset(){
  location.reload();
  localStorage.clear();
}
