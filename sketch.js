
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	roof = new Roof (425,300,250,20);

	bobObject1 = new Bob(340,470,20);
	bobObject2 = new Bob(380,470,20);
    bobObject3 = new Bob(420,470,20);
	bobObject4 = new Bob(460,470,20);
	bobObject5 = new Bob(400,470,20);

    rope1 = new Rope(bobObject1.body,roof.body,-40*2,0);
	rope2= new Rope(bobObject2.body,roof.body,-20*2,0);
	rope3 = new Rope(bobObject3.body,roof.body,-0*2,0); 
	rope4 = new Rope(bobObject4.body,roof.body,20*2,0);
	rope5 = new Rope(bobObject4.body,roof.body,40*2,0);


Engine.run(engine)


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15, y:-15})
		}

	}

function drawline(Constraint){
	bobBodyPosition = constaint.bodyA.position;
	roofBodyPosition = constaint.bodyB.position;
	roofBodyOffset = constaint.pointB;
	roofBodyX = roofBodyPosition.x + roofBodyOffset.x;
	roofBodyY = roofBodyPosition.y + roofBodyOffset.y;
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY)
}

