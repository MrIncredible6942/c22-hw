const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1, ball2, ball3, ball4, rope1, rope2, rope3
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
var ball_options = {
	restitution:0.9
}
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	ball1 = Bodies.circle(400, 200, 30, 30, ball_options)
	World.add(world, ball1)
	ball2 = Bodies.circle(300, 200, 30,	30, ball_options)
	World.add(world, ball2)
	ball3 = Bodies.cirlce(200, 200, 30, 30, ball_options)
	World.add(world, ball3)
	ball4 = Bodies.circle(100, 200, 30, 30, ball_options)
	Engine.run(engine);
	
	rope1 = Constraint.create({

		pointA: {x:400, y:100},
		bodyB: ball1,
		//pointB value is a default value on the body (not on the canvas). Also known as offset.
		pointB: {x:0, y:0},
		length: 100,
		stiffness: 0.1
	  });
	
	  World.add(myWorld, rope1);
	  rope2 = Constraint.create({

		pointC: {x:300, y:100},
		bodyD: ball1,
		//pointB value is a default value on the body (not on the canvas). Also known as offset.
		pointB: {x:0, y:0},
		length: 100,
		stiffness: 0.1
	  });
	
	  World.add(myWorld, rope2);

	  rope3 = Constraint.create({

		pointE: {x:200, y:100},
		bodyF: ball1,
		//pointB value is a default value on the body (not on the canvas). Also known as offset.
		pointB: {x:0, y:0},
		length: 100,
		stiffness: 0.1
	  });
	
	  World.add(myWorld, rope3);
	  rope4 = Constraint.create({

		pointG: {x:100, y:100},
		bodyH: ball1,
		//pointB value is a default value on the body (not on the canvas). Also known as offset.
		pointB: {x:0, y:0},
		length: 100,
		stiffness: 0.1
	  });
	
	  World.add(myWorld, rope4);
	}


function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 ellipse(ball1.position.x, ball1.position.y, 20)
 ellipse(ball2.position.x, ball2.position.y, 20)
 ellipse(ball3.position.x, ball3.position.y, 20)
 ellipse(ball4.position.x, ball4.position.y, 20)

 line(rope1.pointA.position.x, rope1.position.y, ball1.position.x, ball1.position.y)
 line(rope2.pointC.position.x, rope2.position.y, ball2.position.x, ball2.position.y)
 line(rope3.pointE.position.x, rope3.position.y, ball3.position.x, ball3.position.y)
 line(rope4.pointG.position.x, rope4.position.y, ball4,position.x, ball4.position.y)



}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{

  if(keyCode === RIGHT_ARROW)
  {
     Matter.Body.applyForce(ball1, {x: 0, y:0}, {x:0.05, y:0})
  }
}
