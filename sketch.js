var bullet, wall, thickness;

var speed, weight;

function setup() {

  createCanvas(1600,400);
  
  speed = random(223, 321);  
  weight = random(30, 52);
  thickness = random(22, 83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  bullet = createSprite(100, 200, 15, 5);
  bullet.shapeColor = "white";
  bullet.velocityX = speed; 

}

function draw() {

  background("black");  

  if(hasCollided(bullet, wall)){

   bullet.velocityX = 0;
   
   var damage = 0.5 * width * speed * speed/(thickness * thickness * thickness);
   
   if(damage > 10){

    wall.shapeColor = color(255, 0, 0);

   }

   if(damage < 10){

    wall.shapeColor = color(0, 255, 0); 

   }

  }
  
  drawSprites();

}