
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wollon,wollonImg
var mew,mewImg,mewFalling
var backgroundImg,ground

function preload() {
  backgroundImg=loadImage("assests/beach.png")
  mewhit = loadAnimation("assests/mew1.png","assests/mew.png")
  wollonImg=loadImage("assests/wollon.png")
  
}

function setup() {
  createCanvas(400,400);
   
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(100,390,600,20);

  wollon = createSprite(90,360,100,100);
  wollon.scale = 0.1;
  wollon.addImage(wollonImg)

  button = createImg('download.png');
  button.position(350,30);
  button.size(50,50);
  button.mouseClicked(jump);
}



function draw() 
{
  background(51);
  image(backgroundImg,0,0,400,400);
  Engine.update(engine);
  
  if(keyPressed("space")){
    wollon.y=wollon.y+0.59
  }
  

  drawSprites()
}

function jump() {
wollon.y=wollon.y-0.59
  
}