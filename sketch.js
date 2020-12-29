const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;





var engine, world;
var polyga;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

  
   polyga=new polygan(50,250,50)
   Engine.run(engine)
}

function draw(){
    background(0);
    
    //strokeWeight(4);
    polyga.display()
}





