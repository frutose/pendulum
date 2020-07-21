var bola = {
  x:200,
  y:200,
}
var on;
var vx = 0;
var ax = 0.1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill();
  line(200, 0, bola.x, bola.y);
  fill(170, 0, 20);
  ellipse(bola.x, bola.y, 40, 40);
  fill(255, 0, 0, 220);
  rectMode(CENTER);
  rect(340, 345, 60, 60);
  bola.y = sqrt(sq(200) - sq(bola.x - 200)); 
  if (mouseIsPressed) {
    on = false;
    vx = 0; 
    if (mouseX <= 400 || mouseX >= 0) {
      bola.x = mouseX;
    } 
    if (mouseX > 400){
      bola.x = 400;
      bola.y = 0;
    } if (mouseX < 0){
      bola.x = 0;
      bola.y = 0;
    }
      else if (mouseX <= 370 && mouseX >= 310 && mouseY <= 375 && mouseY >= 315){
        bola.x = 200;
        bola.y = 200;
        vx = 0;
    }
  } else {
      on = true;
  }
  energy ();
  textSize(16);
  fill(0);
  // (x, y) coordinates
  text('(x, y) = (', 140, 320);
  text(round(bola.x), 200, 320);
  text(',', 227, 320);
  text(round(bola.y), 235, 320);
  text(')', 261, 320);
  // vx value
  text('vx = ', 160, 340);
  text(round(vx), 195, 340);
  // ax value
  text('ax = ', 160, 360);
  text(ax, 195, 360);
  text('STOP', 320, 350);
  // angle
  text('θ = ', 168, 380);
  angleMode(DEGREES);
  text(round(acos(bola.y/200)), 195, 380);
  text('ͦ', 217, 378);
}

function energy () {
  if (on == true) {
    if (bola.x > 200) {
      vx -= ax;  
      bola.x += vx ;
    } else if (bola.x < 200) {
        vx += ax;
        bola.x += vx;
    }
  }  
}