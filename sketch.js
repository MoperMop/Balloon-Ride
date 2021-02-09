var balloon;
var backgroundImg, balloonImg;
var db, positionRef;
var showHelp;


function preload(){
  backgroundImg = loadImage('pro-C35+images/images/Hot Air Ballon-01.png');
  balloonImg = loadAnimation('pro-C35+images/images/Hot Air Ballon-02.png', 'pro-C35+images/images/Hot Air Ballon-03.png', 'pro-C35+images/images/Hot Air Ballon-04.png');
}
function setup(){
  db = firebase.database();
  createCanvas(500,500);


  showHelp = true;
  
  
  balloon = createSprite(400, 200, 10, 10);
  balloon.addAnimation("rotating", balloonImg);


  positionRef = db.ref('balloon/position');
  positionRef.on("value", checkDb, showError);
}

function draw(){
  background(backgroundImg);

  if(showHelp){
    fill(125);
    textSize(20);
    text("Use the arrow keys to move.", 10, 20);
    text("(press space to remove this message)", 10, 40);
    if(keyDown("SPACE")){showHelp = false;}
  }


  if(db.ref('balloon/position') != undefined){
    if(keyDown("left")){move(balloon.scale*-10, 0);}
    if(keyDown("right")){move(balloon.scale*10, 0);}
    if(keyDown("up")){move(0, balloon.scale*-10);}
    if(keyDown("down")){move(0, balloon.scale*10);}
  }
  balloon.scale = balloon.y/1000;
  
  
  drawSprites();
}