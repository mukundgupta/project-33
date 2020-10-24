const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var particle;
var divisionHeight = 300;
var ground;
var score = 0;
var turn = 0;
var gameState = "play";

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  ground = new Ground(200,height,600,20)
  
  for(var m = 0;m<=480;m = m + 80){
    divisions.push(new Division(m,800 - divisionHeight/2,10,divisionHeight))
  }
  
  for(var t = 15;t<=480;t = t + 50){
    plinkos.push(new Plinko(t,75))
  }
  
  for(var d = 50;d<=480;d = d + 50){
    plinkos.push(new Plinko(d,175))
  }
  for(var g = 15;g<=480;g = g + 50){
    plinkos.push(new Plinko(g,275))
  }
  for(var h = 50;h<=480;h = h + 50){
    plinkos.push(new Plinko(h,375))
  }
  
  Engine.run(engine)

}

function draw() {
  background("black");  
  console.log(mouseX)
  Engine.update(engine)
  ground.display();
  
  if(mouseIsPressed === true){
    if(turn<5){
      particle = new Particle(mouseX, 10,10);
      particles.push(particle);
  
      turn++;
    }
    mouseIsPressed = null;
  }
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();


  }
  for(var j = 0;j< plinkos.length;j++){
    plinkos[j].display();
  }
textSize(30)
  text("500",10,600)
  text("500",410,600)
  text("300",90,600)
  text("300",330,600)
  text("100",170,600)
  text("100",250,600)
  for(var j = 0;j< divisions.length;j++){
    divisions[j].display();
  }
  if(particle!==undefined){
  if(particle.body.position.y>760){
  if( particle.body.position.x > 0&&particle.body.position.x < 75||particle.body.position.x > 400&&particle.body.position.x < 480 ){
    score = score + 500;
    particle = undefined;
  }

  else if(particle.body.position.x > 80 && particle.body.position.x < 160||particle.body.position.x > 320 && particle.body.position.x < 400 ){
    score = score + 300;
    particle = undefined;
  }

  else if(particle.body.position.x > 160 && particle.body.position.x<320 ){
    score = score + 100;
    particle = undefined;
  }
}
  }
  if(turn>=5){
    gameState = "end"
  }
  if(gameState ==="end"){
    textSize(50)
    fill("red")
    text("Game Over",100,400)
    fill("green")
  }
  textSize(32)
  text("Score: "+ score,21,27)
}