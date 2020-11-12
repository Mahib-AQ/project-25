
var ground, ball;
var log1, log2, log3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(350, 680, 900, 7);

	log1 = new Log(565, 560, 20, 229);
	log2 = new Log(755, 560, 20, 229);
	baseLog = new Dustbin( 180, 230);

	ball = new Ball(70);

}


function draw() {
	
	rectMode(CENTER);

	Engine.update(engine);

	background(255);

	ground.display();

	log1.display();
	log2.display();
	baseLog.display();

	ball.display();


	drawSprites();

}



function keyPressed(){

if(keyCode === UP_ARROW){

	Body.applyForce(ball.body,ball.body.position,{x:65,y:-65});

}



}




