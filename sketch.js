var hr,min,sec;
var secangle,minangle,hrangle








function setup() {
  createCanvas(800,500);
  angleMode(DEGREES);
  

}

function draw() {
  background(0);  
  hr=hour();
  min=minute();
  sec=second();

  translate(350,250)
  rotate(-90);
  strokeWeight(10)
  stroke(23,50,95)
  secangle=map(sec,0,60,0,360);
  stroke(200,404,60)
  minangle=map(min,0,60,0,360);
  stroke(37,60,270)
  hrangle=map(hr%12,0,12,0,360);
  push ();
  rotate (minangle);
  strokeWeight(8);
  stroke(75,255,0);
  line (0,0,120,0);
  pop ();
  push ();
  rotate (secangle);
  strokeWeight(8);
  stroke(255,0,50);
  line (0,0,130,0);
  pop ();
  push ();
  rotate (hrangle);
  strokeWeight(8);
  stroke("yellow");
  line (0,0,85,0);
  pop ();
  stroke("white");
noFill();
  arc (0,0,400,400,0,secangle);
  stroke("white");

  arc (0,0,370,370,0,minangle);

  stroke("white");
 
  arc (0,0,340,340,0,hrangle);
  drawSprites();
}