
function napravi() {
document.getElementsByClassName("nes")[0].innerHTML="";
document.getElementsByClassName("sli")[0].innerHTML="";
var elem = document.createElement("img")
elem.setAttribute("class", "slika");
elem.setAttribute("src", "barCode.png");
var ime = document.getElementById("name").value;
var sjedalo = document.getElementById("sjedalo").value;
var red = document.getElementById("red").value;
let divonja = document.createElement("div");
divonja.setAttribute("class","kartica");
divonja.innerHTML ="<br></br>" + ime + "<br></br>" + sjedalo + "<br></br>" + red +"<br></br>" + "<br></br>";
document.getElementsByClassName("nes")[0].appendChild(divonja);
document.getElementsByClassName("sli")[0].appendChild(elem);
}
