
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var rope1,rope2,rope3,rope4,rope5;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roofObjectObject = new roofObject(width/2,height/4,width/7,20);

	bobDiameter = 40;

	startBobPositionX = width/2;
	startBobPositionY = height/4+500;
	bobOject1 =new bob(startBobPositionX - bobDiameter*2,startBobPositionY,bobDiameter);
    bobOject2 =new bob(startBobPositionX - bobDiameter,startBobPositionY,bobDiameter);
	bobOject3 =new bob(startBobPositionX ,startBobPositionY,bobDiameter);
	bobOject4 =new bob(startBobPositionX + bobDiameter,startBobPositionY,bobDiameter);
	bobOject5 =new bob(startBobPositionX + bobDiameter*2,startBobPositionY,bobDiameter);
	
	//Create a ground

	var render = Render.create({
		element:document.body,
		engine:engine,
		options: {
			width:1200,
			height:700,
			wireframes:false
		}
	})
	rope1 = new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope2 = new rope(bobObject2.body,roofObject.body,-bobDiameter*1,0);
	rope3 = new rope(bobObject3.body,roofObject.body,0,0);
	rope4 = new rope(bobObject4.body,roofObject.body,bobDiameter*1,0);
	rope5 = new rope(bobObject5.body,roofObject.body,bobDiameter*2,0);


	/*constraint = {
		bodyA:bobOject1.body,
		bodyB:roofObject.body,
		pointB:{x:-bobDiameter*2,y:0}

		World.add(world,pendulum4);
		World.add(world,pendulum5);
	*/
	
	Engine.run(engine);
  //Render.run(render);
	}



function draw() {
  rectMode(CENTER);
  background(0);
  roofObject.display();


rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

bobOject1.display();
bobOject2.display();
bobOject3.display();
bobOject4.display();
bobOject5.display();



  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(bobObject1.body,bobOject1.body.position,{x:-50,y:-45});
}

}

function drawLine(constraint){
	bobBodyPosition = constraint.bodyA.position
	roofBodyPosition.y+roofBodyOffset.x
	roofBodyOffset = constraint.pointB;
	
	roofBodyX = roofBodyPosition.x+roofBodyOffset.x
	roofBodyY = roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);

}