var garden,rabbit;
var gardenImg,rabbitImg;
var red, orange

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);

// Mover el fondo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//crear sprite de rabbit (conejo)
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  var select_sprites = Math.round(random(1,3));

  edges= createEdgeSprites();
  rabbit.collide(edges);
  if (frameCount % 80 == 0){
  if (select_sprites == 1){
  createApples();  
  }
  else if(select_sprites == 2){
  createOrange();  
  }
  else if(select_sprites == 3){
  createRed();  
  }
  }

  rabbit.x=World.mouseX;
  drawSprites();
  
}

function createApples(){
apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY=3;
apple.lifetime=150;
}
function createOrange(){
  orange = createSprite(random(50,350),40,10,10);
  orange.addImage(orangeImg);
  orange.scale=0.07;
  orange.velocityY=3;
  orange.lifetime=150;
  }
  function createRed(){
    red = createSprite(random(50,350),40,10,10);
    red.addImage(redImg);
    red.scale=0.07;
    red.velocityY=3;
    red.lifetime=150;
    }