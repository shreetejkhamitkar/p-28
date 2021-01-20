
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

 var mango1,mango2,mango3,mango4,mango5,mango6,mango7,slingshot,
 stoneObj,boy,ground,tree;
var world, launcherObject;
var launchingForce =100;

function preload()
{
	boy = loadImage("images/boy.png");
	treeImage = loadImage("images/tree.png");	
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	
	stoneObj=new Stone(235,420,30);
	
	
	ground=new Ground(width/2,600,width,20);

	tree=new Tree(1050,580);

	slingShot=new Launcher(stoneObj.body,{x:280 , y:575});

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,40);
	
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background("cyan");
 // fill("red")
  textSize(20);
  text("press space button to get second chance to play!!",100,100);
  image(boy, 200,340,200,300);
  //drawSprites();
  tree.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  ground.display();
  slingShot.display();
  

  detectCollision(stoneObj,mango1,);
  detectCollision(stoneObj,mango2,);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	slingShot.fly()
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body,{x:235, y:420});
		slingShot.attach(stoneObj.body);
	  }
	}
function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false)
}
}