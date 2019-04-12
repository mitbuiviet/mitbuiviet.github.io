var btn = window.document.querySelector("#input");
btn.addEventListener("click", function () {
var input= document.getElementById("userInput");
var choices = window.document.querySelector(".choices");
var newdiv = window.document.createElement("div"); 
newdiv.classList.add("choice","col"); 
var positionList = ["right", "middle","left"] ;
var position = positionList[Math.floor(Math.random() * positionList.length)];
newdiv.classList.add(position);
var p = window.document.createElement("p"); p.appendChild(window.document.createTextNode(input.value));
newdiv.appendChild(p); choices.appendChild(newdiv);
console.log(position)})

var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){
    var input2 = document.getElementById("input2").value;
    document.styleSheets[0].cssRules[0].style.animation=input2+"s ease 0s infinite normal none running Gradient";
    document.styleSheets[0].cssRules[7].style.animation=input2+"s ease 0s infinite normal none running Gradient";
}
                    );

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