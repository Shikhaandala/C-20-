var Mr,Fr
function setup() {
  createCanvas(800,400);
 Fr =  createSprite(200, 200, 50, 80);
 Fr.shapeColor = "Green";
 Mr = createSprite(400,200,80,30);
 Mr.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);  
  Mr.x = World.mouseX;
  Mr.y = World.mouseY;
  console.log(Mr.x - Fr.x );
  if (Mr.x - Fr.x < Mr.width/2 + Fr.width/2 && Fr.x - Mr.x < Mr.width/2 + Fr.width/2 && Mr.y - Fr.y < Mr.height/2 + Fr.height/2 && Fr.y - Mr.y < Mr.height/2 + Fr.height/2){
    Mr.shapeColor = "red";
    Fr.shapeColor = "red";

  }

  

  drawSprites();
}