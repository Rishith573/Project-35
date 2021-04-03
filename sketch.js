var dog, dogImg, happydogImg, foodS, foodStock, db;

function preload()
{
	dogImg = loadImage("images/dog.png");
  happydogImg = loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(275, 350, 20, 20)
  dog.addImage(dogImg)
  dog.scale = 0.25;

  db = firebase.database();
  foodStock = db.ref("food");
  foodStock.on("value", readStock);


  
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydogImg)

  drawSprites();
  
  text(writeStock, 250, 500);

  }
  

}

function readStock(){
  foodS = data.val();
}

function writeStock(){
  if(x<0){
    x = 0;
  }else{
    x = x+1;
  }

  database.ref('/').update({
    Food:x
  })
}


