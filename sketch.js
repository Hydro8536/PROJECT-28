
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage, boy;
var ground, tree,launch;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var stoneObj;
function preload()
{
	boyImage = loadImage("boy.png");	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;
	
	stoneObj = new Stone(68,350);
	
	mango1 = new Mango(420,250);
	mango2 = new Mango(700,120);
	mango3 = new Mango(800,300);
	mango4 = new Mango(600,150);
	mango5 = new Mango(560,230);
	mango6 = new Mango(380,180);
	mango7 = new Mango(310,200);
	mango8 = new Mango(500,225);
	mango9 = new Mango(650,285);
	mango10 = new Mango(750,150);
	tree = new Tree(600,340);
	ground = new Ground(500,650,1000,100);
	//Create the Bodies Here.

	launch = new Launcher(stoneObj.body,{x:85,y:445})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boyImage ,50,380,200,300);
  tree.display();
  ground.display();
  launch.display();
  
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stoneObj.display();


  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);

  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launch.fly();
    
}

function keyPressed(){
if (keyCode === 32){
	Matter.Body.setPosition(stoneObj.body,{x:55,y:445})
	launch.attach(stoneObj.body);
}
}

function detectollision(lstone,lmango){
	console.log(lstone.body.circleRadius)
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  console.log(distance)
  s = lstone.body.circleRadius+lmango.body.circleRadius;
  if(distance<=s)
  {
    Matter.Body.setStatic(lmango.body,false);
  }

}
