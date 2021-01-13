const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

var child,childimg;
var wall1,wall2,wall3,wall4,wall5,wall6;
var wall7,wall8,wall9,wall10,wall11,wall12;
var wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28;

var edges;

function preload(){
  childimg=loadImage("child img.jpg");
}


function setup() {
  createCanvas(displayWidth,displayHeight-170);
  engine=Engine.create();
  world=engine.world;

  child=createSprite(1266,100,30,30); 
  child.addImage(childimg);
  child.scale=0.09;

  wall1=createSprite(displayWidth-100,300,30,100);
  wall1.shapeColor="brown";
  wall2=createSprite(displayWidth-200,300,30,100);
  wall2.shapeColor="brown";
  wall3=createSprite(displayWidth-300,300,30,100);
  wall3.shapeColor="brown";
  wall4=createSprite(displayWidth-400,300,30,100);
  wall4.shapeColor="brown";
  wall5=createSprite(displayWidth-525,300,30,100);
  wall5.shapeColor="brown";
  wall6=createSprite(displayWidth-600,300,30,100);
  wall6.shapeColor="brown";
  
  wall7=createSprite(300,300,30,100);
  wall7.shapeColor="brown";
  wall8=createSprite(200,300,30,100);
  wall8.shapeColor="brown";
  wall9=createSprite(700,300,30,100);
  wall9.shapeColor="brown";
  wall10=createSprite(600,300,30,100);
  wall10.shapeColor="brown";
  wall11=createSprite(500,300,30,100);
  wall11.shapeColor="brown";
  wall12=createSprite(400,300,30,100);
  wall12.shapeColor="brown";

  wall13=createSprite(displayWidth-100,200,100,30);
  wall13.shapeColor="brown";
  wall14=createSprite(displayWidth-250,200,100,30);
  wall14.shapeColor="brown";
  wall15=createSprite(displayWidth-400,200,100,30);
  wall15.shapeColor="brown";
  wall16=createSprite(displayWidth-575,200,100,30);
  wall16.shapeColor="brown";
  wall17=createSprite(displayWidth-700,200,100,30);
  wall17.shapeColor="brown";
  wall18=createSprite(displayWidth-850,200,100,30);  
  wall18.shapeColor="brown";
  wall19=createSprite(displayWidth-1000,200,100,30);
  wall19.shapeColor="brown";
  wall20=createSprite(displayWidth-1250,200,200,30);
  wall20.shapeColor="brown";
 
  wall21=createSprite(displayWidth-100,400,100,30);
  wall21.shapeColor="brown";
  wall22=createSprite(displayWidth-250,400,100,30);
  wall22.shapeColor="brown";
  wall23=createSprite(displayWidth-400,400,100,30);
  wall23.shapeColor="brown";
  wall24=createSprite(displayWidth-575,400,100,30);
  wall24.shapeColor="brown";
  wall25=createSprite(displayWidth-700,400,100,30);
  wall25.shapeColor="brown";
  wall26=createSprite(displayWidth-850,400,100,30);  
  wall26.shapeColor="brown";
  wall27=createSprite(displayWidth-1000,400,100,30);
  wall27.shapeColor="brown";
  wall28=createSprite(displayWidth-1250,400,200,30);
  wall28.shapeColor="brown";
  wall29=createSprite(200,50,30,268);
  wall29.shapeColor="brown";
  wall30=createSprite(200,466,30,100);
  wall30.shapeColor="brown";
  wall31= createSprite(displayWidth-488,400,70,30);
  wall31.shapeColor="brown";

wall32=createSprite(displayWidth-1100,400,90,30);  
wall32.shapeColor="brown";
wall32.visible=false;

wall33=createSprite(50,450,50,50);  
wall33.shapeColor="yellow";

wall1.depth = child.depth;
wall2.depth = child.depth;
wall3.depth = child.depth;
wall4.depth = child.depth;
wall5.depth = child.depth;
wall6.depth = child.depth;
wall7.depth = child.depth;
wall8.depth = child.depth;
wall9.depth = child.depth;
wall10.depth = child.depth;
wall11.depth = child.depth;
wall12.depth = child.depth;
wall13.depth = child.depth;
wall14.depth = child.depth;
wall15.depth = child.depth;
wall16.depth = child.depth;
wall17.depth = child.depth;
wall18.depth = child.depth;
wall19.depth = child.depth;
wall20.depth = child.depth;
wall21.depth = child.depth;
wall22.depth = child.depth;
wall23.depth = child.depth;
wall24.depth = child.depth;
wall25.depth = child.depth;
wall26.depth = child.depth;
wall27.depth = child.depth;
wall28.depth = child.depth;
wall29.depth = child.depth;
wall30.depth = child.depth;  
wall31.depth = child.depth;
wall32.depth = child.depth;
child.depth=child.depth+1;

 
  console.log(child.position.x)
}

function draw() {
background(180);
//Engine.update(engine);
child.velocityY=0;
child.velocityX=0;





if(keyDown("DOWN_ARROW")){
child.velocityY=2;
child.velocityX=0;  
} 
if(keyDown("UP_ARROW")){
  child.velocityY=-2;
  child.velocityX=0;  
  }
  if(keyDown("LEFT_ARROW")){
    child.velocityX=-2;
    child.velocityY=0;  
    } 
    if(keyDown("RIGHT_ARROW")){
      child.velocityX=2;
      child.velocityY=0;  
    }
// ----------------------------------------------------------------------------------//
  
    if(child.isTouching(wall4)){
      Reset2();
      textSize(50);
      text("Try Again",displayWidth/2,displayHeight/2);
    } 

    if(child.isTouching(wall11)){
      Reset2();
      textSize(50);
      text("Try Again",displayWidth/2,displayHeight/2);
    } 

    if(child.isTouching(wall13)){
      Reset2();
      textSize(50);
      text("Try Again",displayWidth/2,displayHeight/2);
    } 

    if(child.isTouching(wall14)){
      Reset2();
      textSize(50);
      text("Try Again",displayWidth/2,displayHeight/2);
    } 

    if(child.isTouching(wall16)){
      Reset2();
      textSize(50);
      text("Try Again",displayWidth/2,displayHeight/2);
    } 

    if(child.isTouching(wall17)){
      Reset2();
      textSize(50);
      text("Try Again",displayWidth/2,displayHeight/2);
    } 
     
    if(child.isTouching(wall18)){
      Reset2();
      textSize(50);
      text("Try Again",displayWidth/2,displayHeight/2);
    } 

    if(child.isTouching(wall20)){
      Reset2();
      textSize(50);
      text("Try Again",displayWidth/2,displayHeight/2);
    } 

    if(child.isTouching(wall21)){
      Reset2();
      textSize(50);
      text("Try Again",displayWidth/2,displayHeight/2);
    } 

    if(child.isTouching(wall24)){
      Reset2();
      textSize(50);
      text("Try Again",displayWidth/2,displayHeight/2);
    } 
     
    if(child.isTouching(wall25)){
      Reset2();
      textSize(50);
      text("Try Again",displayWidth/2,displayHeight/2);
    } 

    if(child.isTouching(wall26)){
      Reset2();
      textSize(50);
      text("Try Again",displayWidth/2,displayHeight/2);
    } 

    if(child.isTouching(wall27)){
      Reset2();
      textSize(50);
      text("Try Again",displayWidth/2,displayHeight/2);
    } 

    if(child.isTouching(wall29)){
      Reset2();
      textSize(50);
      text("Try Again",displayWidth/2,displayHeight/2);
    } 

    if(child.isTouching(wall30)){
      Reset2();
      textSize(50);
      text("Try Again",displayWidth/2,displayHeight/2);
    } 
//-------------------------------------------------------------------------------------//
    if(child.isTouching(wall32)){
    
      wall32.visible=true;
      textSize(50);
      text("Try Again",displayWidth/2,displayHeight/2);
      Reset();    
    }

    if(child.isTouching(wall31)){
      wall31.visible=false;
      textSize(50);
      text("Good Job",displayWidth/2,displayHeight/2)    
    }

  if(child.isTouching(wall33)){
    textSize(50);
    text("You Won",displayWidth/2,displayHeight/2)  
  }

  if(child.isTouching(wall28)){
    Reset(); 
  }

textSize(25);
text(" Child can jump above only some walls ",displayWidth/2-200,50);


edges=createEdgeSprites();
child.bounceOff(edges);

child.bounceOff(wall1);
child.bounceOff(wall2);
child.bounceOff(wall3);
child.bounceOff(wall4);
child.bounceOff(wall5);
child.bounceOff(wall6);
child.bounceOff(wall7);
child.bounceOff(wall8);
child.bounceOff(wall9);
child.bounceOff(wall10);

child.bounceOff(wall11);
child.bounceOff(wall12);
child.bounceOff(wall13);
child.bounceOff(wall14);
child.bounceOff(wall15);
child.bounceOff(wall16);
child.bounceOff(wall17);
child.bounceOff(wall18);
child.bounceOff(wall19);
child.bounceOff(wall20);

child.bounceOff(wall21);
child.bounceOff(wall22);
child.bounceOff(wall23);
child.bounceOff(wall24);
child.bounceOff(wall25);
child.bounceOff(wall26);
child.bounceOff(wall27);
child.bounceOff(wall28);
child.bounceOff(wall29);
child.bounceOff(wall30);
child.bounceOff(wall32);

drawSprites();
}

 function Reset() {
  child.velocityX=0;
  child.velocityY=0;
  child.position.x=child.position.x+916;
  child.position.y=child.position.y-300; 
}

function Reset2() {
 child.x=1266;
  child.y=100;
}
