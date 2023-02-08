var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  loadImage(path.png);
  loadAnimation (boyRunning) 
 
}

function setup(){
  
  createCanvas(400,400);
  path.createSprite(0,0,800,800) ;
  addImage = path.png;
  path.velocityY = 1.2;
path.scale=1.2;

boy.createSprite;
addAnimation = boyRunning;
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.positionX = mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary);
  boy.collide(leftBoundary)
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
