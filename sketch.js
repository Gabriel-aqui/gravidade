const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground;
var left;
var right;
var top_wall;
var upbutton
var rightbutton
var leftbutton

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options = {
    restitution : 1,
    frictionAir : 0.01
  }
  ball = Bodies.circle(100,10,20,ball_options);

  World.add(world,ball);
  upbutton = createImg("up.png")
  upbutton.position(100, 30)
  upbutton.size(25, 25)
  upbutton.mouseClicked(upforce)
  rightbutton = createImg("right.png")
  rightbutton.position(150, 30)
  rightbutton.size(25, 25)
  rightbutton.mouseClicked(rightforce)
  lefttbutton = createImg("left.png")
  lefttbutton.position(50, 30)
  lefttbutton.size(25, 25)
  lefttbutton.mouseClicked(leftforce)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background("#282a36");
  ellipse(ball.position.x,ball.position.y,20);
  fill("#bd93f9")
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function upforce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0,y:-0.03})
}

function rightforce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.03, y:0})
}

function leftforce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:-0.03, y:0})
}