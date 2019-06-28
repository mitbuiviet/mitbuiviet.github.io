var _ = require("lodash");

var input= document.getElementById("userInput");
var choices = window.document.querySelector(".choices");




function addchoice() {
if (input.value.length>0) {

var newdiv = window.document.createElement("div");
newdiv.classList.add("choice","col");
if (document.body.classList.contains("blackhole")===true) {newdiv.classList.add("blackhole")};
var positionList = ["right", "middle","left"] ;
var position = positionList[Math.floor(Math.random() * positionList.length)];
newdiv.classList.add(position);
var p = window.document.createElement("p"); p.appendChild(window.document.createTextNode(input.value));
newdiv.appendChild(p);
choices.appendChild(newdiv);
newdiv.addEventListener("click",function(){newdiv.parentNode.removeChild(newdiv)});
input.value = ""
}}








var btn = window.document.querySelector("#input");

btn.addEventListener("click", function () {
addchoice()} );

input.addEventListener("keypress", function(event){
    if (event.which===13){addchoice()}
})



var input2 = document.getElementById("input2");
input2.addEventListener("change",function(){
    document.styleSheets[1].cssRules[0].style.animation=input2.value+"s ease 0s infinite normal none running Gradient";
    document.styleSheets[1].cssRules[7].style.animation=input2.value+"s ease 0s infinite normal none running Gradient";}
)






function blackholebtn(){
    var audio=document.getElementById("myaudio");
    audio.play();
    document.body.classList.toggle("blackhole");
var
rightchoice= document.querySelectorAll("div.col.choice.right");

var
middlechoice=
document.querySelectorAll("div.col.choice.middle");

var
leftchoice=
document.querySelectorAll("div.col.choice.left");

for (var i=0; i< rightchoice.length; i++) {
    rightchoice[i].classList.toggle("blackhole");

};
for (var j=0; j< middlechoice.length; j++){
    middlechoice[j].classList.toggle("blackhole");

};
for (var k=0; k< leftchoice.length; k++){
    leftchoice[k].classList.toggle("blackhole");

}
};


  var color1=document.createElement("input");
    color1.setAttribute("type","color");
    color1.setAttribute("id","color1");
    color1.setAttribute("value","#E7E8EA");
    var color2=document.createElement("input");
    color2.setAttribute("type","color");
    color2.setAttribute("id","color2");
    color2.setAttribute("value","#50C1D8");
    var buttonbox=document.querySelector(".buttonbox");




function colorrefresh(){
if (document.body.classList.contains("blackhole")===true) {blackholebtn();};
document.styleSheets[1].cssRules[0].style.background="linear-gradient(217deg,"+color1.value+",rgba(255,0,0,0)70.71%),linear-gradient(127deg,#C8DBAC  ,rgba(0,255,0,0) 70.71%),linear-gradient(336deg,rgba(0,0,255,0),"+color2.value+"70.71%)";
document.styleSheets[1].cssRules[0].style.backgroundSize="400% 400%";
document.styleSheets[1].cssRules[0].style.webkitAnimation="Gradient 6s ease infinite;";
document.styleSheets[1].cssRules[0].style.animation="Gradient 6s ease infinite;";
}
function optional(){
  colorrefresh();
  buttonbox.appendChild(color1);
  buttonbox.appendChild(color2);
  var optionbtn=document.querySelector("#optional");
  optionbtn.parentNode.removeChild(optionbtn);
color1.addEventListener("input",colorrefresh);
color2.addEventListener("input",colorrefresh);
}
