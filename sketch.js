 const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var engine, world;
var box;
var ground;
function setup() {
  createCanvas(800,400);
 
engine = Engine.create();
world = engine.world;


var options1 ={
  restitution:1
}

box = Bodies.rectangle(200,100,70,50,options1)
World.add(world,box)

var options = {
  isStatic : true
}
ground = Bodies.rectangle(400,380,800,50,options)
World.add(world,ground)

}

function draw() {
  background(0); 
Engine.update(engine)
fill("blue")
rectMode(CENTER)
rect(box.position.x, box.position.y, 70,50)
fill("brown")
rect(ground.position.x,ground.position.y,800,50)

}