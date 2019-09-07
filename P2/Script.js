
window.onload = animateScript();
window.onload = animateScript2();



// Sprite


var tID; //we will use this variable to clear the setInterval()
function animateScript() {
    var    position = 112.25; //start position for the image slicer
const  interval = 100; //100 ms of interval for the setInterval()
tID = setInterval ( () => {
document.getElementById("image").style.backgroundPosition = 
`-${position}px 0px`; 
//we use the ES6 template literal to insert the variable "position"
if (position < 449)
{ position = position + 112.25;}
//we increment the position by 256 each time
else
{ position = 112.25; }
//reset the position to 256px, once position exceeds 1536px
}
, interval ); //end of setInterval
} //end of animateScript()

// Sprite2

var tID2; //we will use this variable to clear the setInterval()
function animateScript2() {
var    position = 112.25; //start position for the image slicer
const  interval = 100; //100 ms of interval for the setInterval()
tID2 = setInterval ( () => {
document.getElementById("image2").style.backgroundPosition = 
`-${position}px 127px`; 
//we use the ES6 template literal to insert the variable "position"
if (position < 449)
{ position = position + 112.25;}
//we increment the position by 256 each time
else
{ position = 112.25; }
//reset the position to 256px, once position exceeds 1536px
}
, interval ); //end of setInterval
} //end of animateScript()

function atk1(){
    document.getElementById('opponent-health').value() - 100;
}

        

