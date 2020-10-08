const Engine= Matter.Engine
const World = Matter.World
const Bodies= Matter.Bodies

var engine,ground;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var options ={
    isStatic: true,
  }

  ground=Bodies.rectangle(200,300,800,50,options);
  World.add(world,ground)

  console.log(ground);
  console.log(ground.isStatic);
  console.log(ground.position);

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,800,50)
  drawSprites();
}