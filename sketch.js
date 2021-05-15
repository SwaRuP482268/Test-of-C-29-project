const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var polygon; 
var Sling;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(690,200,170,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //2=level one
  block_1 = new Block(628,180,20,30);
  console.log(block_1);
  block_2 = new Block(648,180,20,30);
  block_3 = new Block(668,180,20,30);
  block_4 = new Block(688,180,20,30);
  block_5 = new Block(708,180,20,30);
  block_6 = new Block(728,180,20,30);
  block_7 = new Block(748,180,20,30);
  //2=level two
  block_8 = new Block(648,150,20,30);
  block_9 = new Block(668,150,20,30);
  block_10 = new Block(688,150,20,30);
  block_11 = new Block(708,150,20,30);
  block_12 = new Block(728,150,20,30);
  //2=level three
  block_13 = new Block(668,130,20,30);
  block_14 = new Block(688,130,20,30);
  block_15 = new Block(708,130,20,30);
  //2=top
  block_16 = new Block(688,100,20,30);

  polygon = Bodies.circle(100,300,40,40);
  

  Sling = new SlingShot(this.polygon,{x:100,y:200});
  
  
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block_1.display();
  block_2.display();
  block_3.display();
  block_4.display();
  block_5.display();
  block_6.display();
  block_7.display();
  fill("pink");
  block_8.display();
  block_9.display();
  block_10.display();
  block_11.display();
  block_12.display();
  fill("turquoise");
  block_13.display();
  block_14.display();
  block_15.display();
  fill("grey");
  block_16.display();

  Sling.display();

  
 

}
