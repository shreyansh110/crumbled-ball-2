const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log1,log2,log3,log4,paper,DUSt,popr;

function preload()
{
paperball=loadImage("pba.png");
db=loadImage("dustbingreen.png");	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  DUST=createSprite(800,385,10,10)
log1=new Stick(800,475,150,13);
log2=new Stick(728.5,435,15,210);
log3=new Stick(872,435,15,210);
log4=new Ground(500,490,1100,20)
paper=new Ball(50,470,10)
DUST.addImage(db)
DUST.scale=0.5
popr=createSprite(50,470,10);
popr.addImage(paperball);
popr.scale=0.2
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  log1.display();

  log2.display();
  log3.display();
  log4.display();
  paper.display();
 
 
  drawSprites();
  keyPressed();
 
}

function keyPressed(){
if(keyCode=== UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:
  3,y:-3})

}


}


