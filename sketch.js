var bullet, wall;
var damage;
var speed, weight,thickness;
var line1, line2, line3, line4;

function setup() {
  createCanvas(1600,400);

   speed = Math.round(random(223,321));
   weight = Math.round(random(30,52));
   thickness = Math.round(random(22,83)); 

   bullet = createSprite(50, 200, 70, 30);
   bullet.shapeColor = "white";

   wall = createSprite(1200,200,thickness,height/2);
   wall.shapeColor = color(80,80,80);
   
   line1 = createSprite(800,5,1600,10);
   line1.shapeColor = "white";

   line2 = createSprite(800,1595,1600,10);
   line2.shapeColor = "white";

   line3 = createSprite(5,200,10,400);
   line3.shapeColor = "white";

   line4 = createSprite(1595,200,10,400);
   line4.shapeColor = "white";
}

function draw() {
  background(0,0,0);  

  bullet.velocityX = speed;
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    console.log(damage);
    console.log(bullet.x);
    if(damage > 10){
      wall.shapeColor = color(255,0,0);
      bullet.x = 1190;
      fill("white");
      textSize(24);
      text("A REPAIR IS MUST!",600,200);
    }
    if(damage < 10){
      wall.shapeColor = color(0,255,0);
      bullet.x = 1160;
      fill("white");
      textSize(24);
      text("YOU ARE SAFE!",600,200);
    }
  }

  drawSprites();
}