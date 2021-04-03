var x=300
var y=40
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("red");
  rect(10,160,10,100);
  rect(360,mouseY,15,100);
  circle(x,y,15,15);
  x=x-1
  y=y+1
}